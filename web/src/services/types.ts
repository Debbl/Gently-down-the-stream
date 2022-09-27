export interface UserLoginResponse {
  code: number;
  data: {
    username: string;
    password: string;
  } | null;
  msg: string;
  map: object;
}
