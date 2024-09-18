import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import React, {useEffect, useState} from "react";
import {useLazyQuery, useMutation} from "@apollo/client";
import {AUTH_TOKEN, LOGIN_MUTATION, REFRESH_TOKEN} from "@/apollo-client";
import {useRouter} from 'next/router';
import useUserStore from "@/store/store";
import {ILoginData, ILoginVars, IRefreshData, IRefreshVars, IUserAuthData} from "@/types/authTypes";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export const LoginForm: React.FC = () => {

  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const {setUser} = useUserStore();

  const handleFetchUserProfile = (accessToken: string) => {
    fetchUserProfile({
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }

  useEffect(() => {
    const at = localStorage.getItem('access_token');
    if (at) handleFetchUserProfile(at)
    
    const rt = localStorage.getItem('refresh_token')
    if (rt) sendRefreshToken({variables: {rToken: rt}});
  }, [])

  const [fetchUserProfile, { loading: profileLoading }] = useLazyQuery<{myProfile: IUserAuthData}>(AUTH_TOKEN, {
    onCompleted: (data) => {
      setUser(data.myProfile.name, data.myProfile.avatar, data.myProfile.id); // Сохраняем данные пользователя в состоянии
      router.push('/info'); // Перенаправляем на страницу информации
    },
    onError: (error) => {
      console.error("Fetch profile error:", error);
    },
  });

  const [sendRefreshToken] = useMutation<{refreshToken: IRefreshData}, IRefreshVars>(REFRESH_TOKEN, {
    onCompleted: (data) => {
      localStorage.setItem("access_token", data.refreshToken.access_token)
      localStorage.setItem("refresh_token", data.refreshToken.refresh_token)
      handleFetchUserProfile(data.refreshToken.access_token)
    },
    onError: (error) => {
      console.error("Refresh token error:", error);
    },
  });

  const [login, {loading, error}] = useMutation<{login: ILoginData}, ILoginVars>(LOGIN_MUTATION, {
    onCompleted: (data) => {
      setSuccess(true)
      localStorage.setItem("access_token", data.login.access_token)
      localStorage.setItem("refresh_token", data.login.refresh_token)
      handleFetchUserProfile(data.login.access_token)
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const submit = (email: string, password: string) => {
    login({variables: {email, password}});
  }

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      {profileLoading && <p>Загрузка...</p>}
      {error && <div>{error.message}</div>}
      {!success ? <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full "  onClick={() => submit(email, password)}>{loading ? 'Loading...' : 'Sign in'}</Button>
        </CardFooter>
      </Card>
        :
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-4xl align-middle mx-auto">Success</CardTitle>
            <CardDescription className="text-2xl align-middle mx-auto">
                You have successfully logged in. Please wait...
            </CardDescription>
          </CardHeader>
        </Card>

      }

    </div>

  )
}

export default LoginForm;
