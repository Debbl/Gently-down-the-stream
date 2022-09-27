import type { LoginInfo } from "@/types";
import type { UserLoginResponse } from "../types";
import request from "../index";

// 用户登录
function requestUserLogin(data: LoginInfo) {
  return request.post<any, UserLoginResponse>("/users/login", data);
}

export { requestUserLogin };
