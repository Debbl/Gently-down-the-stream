import type { UserInfo, LoginInfo } from "@/types";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { requestUserLogin } from "@/services/modules/login";
import router from "@/router";

const userInfo = useLocalStorage<UserInfo>("use-info", {
  username: "",
});

const useUserStore = defineStore("user", {
  state: (): RemovableRef<UserInfo> => userInfo,
  actions: {
    async actionUserLogin(loginInfo: LoginInfo) {
      const userLoginResponse = await requestUserLogin(loginInfo);
      if (userLoginResponse.data) {
        userInfo.value.username = userLoginResponse.data.username;
        router.push("/home");
      }
    },
  },
});

export default useUserStore;
