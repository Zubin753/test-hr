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
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {AUTH_TOKEN, LOGIN_MUTATION} from "@/apollo-client";
import {useRouter} from 'next/router';
import useUserStore from "@/store/store";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export const LoginForm: React.FC = () => {

  const router = useRouter();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const {user, setUser} = useUserStore();

  const [fetchUserProfile, { loading: profileLoading, data: profileData, error: profileError }] = useLazyQuery(AUTH_TOKEN, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    onCompleted: (data) => {
      console.log("Авторизация")
      setUser(data.myProfile.name, data.myProfile.avatar, data.myProfile.id); // Сохраняем данные пользователя в состоянии
      router.push('/info'); // Перенаправляем на страницу информации
    },
    onError: (error) => {
      console.error("Fetch profile error:", error);
    },
  });

  const [login, {loading, error}] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      console.log("Login successful:", data);
      console.log(data.login)
      localStorage.setItem("access_token", data.login.access_token)
      setAccessToken(data.login.access_token)
      localStorage.setItem("refresh_token", data.login.refresh_token)

      fetchUserProfile();

      // Здесь вы можете сохранить токены или выполнить другие действия
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
      {error && <div>{error.message}</div>}
      <Card className="w-full max-w-sm">
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
          <Button className="w-full " onClick={() => submit(email, password)}>{loading ? 'Loading...' : 'Sign in'}</Button>
        </CardFooter>
      </Card>
    </div>

  )
}

export default LoginForm;
