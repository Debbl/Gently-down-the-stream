<script lang="ts" setup>
import { reactive } from "vue";
import { loginRules } from "./config";

const loginInfo = reactive({
  username: "",
  password: "",
});
</script>

<template>
  <div class="flex h-full items-center justify-center bg-[#faf7f8fa]">
    <div>
      <el-form class="w-72" :rules="loginRules" :model="loginInfo">
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
            <el-button type="primary">登录</el-button>
            <el-button>重置</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
