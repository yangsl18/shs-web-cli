<script setup>
import login from '@/components/login/login.vue';
import { ElMessage } from 'element-plus'
import { loginApi } from '@/api/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const onLogin = (info) => {
    router.push('index')
    // loginApi(info)
    // .then(res => {
    //     console.log(res)
    //     if(res.code !== 200) return ElMessage.error(res.message || 'Error');
    //     router.push('index')
    // })
    // .catch(err => console.log(err));
}

const onForgotPwd = () => {
   //TODO 忘记密码处理
}
</script>

<template>
  <login @submitForm="onLogin" @forgotPassword="onForgotPwd"></login>
</template>

<style>
</style>