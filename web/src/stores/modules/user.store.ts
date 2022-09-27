import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: (): {
    username: string;
  } => ({
    username: "",
  }),
});

export default useUserStore;
