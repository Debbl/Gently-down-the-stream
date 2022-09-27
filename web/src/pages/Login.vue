<script lang="ts" setup>
import type { LoginInfo } from "@/types";
import { ElForm, ElFormItem, ElInput, ElRow, ElButton } from "element-plus";
import useUserStore from "@/stores/modules/user.store";
import { reactive, ref } from "vue";
import { loginRules } from "./config";

const userStore = useUserStore();
const userLoginFormRef = ref<InstanceType<typeof ElForm>>();

const loginInfo = reactive<LoginInfo>({
  username: "zhangsan4",
  password: "123456",
});

const userLogin = () => {
  userLoginFormRef.value?.validate((valid) => {
    if (valid) {
      userStore.actionUserLogin(loginInfo);
    }
  });
};
</script>

<template>
  <div class="flex h-full items-center justify-center bg-[#faf7f8fa]">
    <div>
      <el-form
        class="w-72"
        :rules="loginRules"
        :model="loginInfo"
        ref="userLoginFormRef"
      >
        <el-form-item label-width="70px" label="用户名" prop="username">
          <el-input v-model="loginInfo.username" />
        </el-form-item>
        <el-form-item label-width="70px" label="密码" prop="password">
          <el-input
            v-model="loginInfo.password"
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-row class="flex w-full justify-center gap-x-4">
            <el-button type="primary" @click="userLogin">登录</el-button>
            <el-button>重置</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
