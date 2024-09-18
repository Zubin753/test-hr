export interface IRefreshData {
  access_token: string,
  refresh_token: string
}

export interface IRefreshVars{
  rToken: string,
}

export interface IUserAuthData{
  id: string,
  name: string,
  avatar: string
}

export interface ILoginVars{
  email: string,
  password: string,
}

export interface ILoginData{
  access_token: string,
  refresh_token: string,
}