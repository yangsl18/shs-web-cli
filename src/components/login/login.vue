<script setup>
import { ref, reactive } from 'vue';
import { Lock, Cellphone } from '@element-plus/icons-vue';
import { useI18n } from '@/locales';

const { t } = useI18n();
//emits
const emit = defineEmits(['submitForm', 'forgotPassword']);
//data
let loginMsg = reactive({
    username: '',
    password: ''
})
const ruleForms = ref(null);
const rules = reactive({
    username: [
        { required: true, message: t('sys.phone') + t('common.cannot_empty'), trigger: "blur" },
        { pattern: /\S/, message: t('sys.phone') + t('common.input_error'), trigger: "blur", },
    ],
    password: [
        { required: true, message: t('sys.password') + t('common.cannot_empty'), trigger: "blur" }
    ],
})
const submitForm = async () => {
  if (!ruleForms) return;
  await ruleForms.value.validate((valid, fields) => {
    if (valid) {
      emit('submitForm', loginMsg)
    } else {
      console.log('error submit!', loginMsg, fields)
    }
  })
}
const forgotPwd = async () => {
    return emit('forgotPassword')
}


</script>

<template>
  <div class="login-main main-bg">
    <div class="content-login clearfix">
      <div class="login-form">
        <div class="system-title">{{$t('sys.name')}}</div>
            <el-form
              ref="ruleForms"
              :model="loginMsg"
              :rules="rules"
              size="default"
              @keydown.native.enter.prevent
            >
              <el-form-item prop="username">
                <el-input
                  type="text"
                  v-model="loginMsg.username"
                  class="height-44"
                  :placeholder="$t('sys.phone')"
                  maxlength="11"
                  :prefix-icon="Cellphone"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="password" class="mt10">
                <el-input
                  type="password"
                  v-model="loginMsg.password"
                  class="height-44"
                  :placeholder="$t('sys.password')"
                  :prefix-icon="Lock"
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <div class="fotgot-text">
                  <div @click="forgotPwd">
                    <span class="colorBlue" style="cursor: pointer"
                      >{{$t('sys.forgot') + $t('sys.password')}}</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="common-btn"
                  long
                  round
                  style="margin-left: 0"
                  @click="submitForm"
                  >{{$t('sys.login')}}</el-button>
              </el-form-item>
            </el-form>
      </div>
      <div class="copy-right">
        <p class="mt10">{{$t('sys.copyright')}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-main {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/login-bg.png) 0 0 no-repeat;
    background-size: cover;
    .content-login {
        position: absolute;
        top: 50%;
        overflow: inherit;
        width: 504px;
        /* height: 692px; */
        right: 77px;
        overflow: hidden;
        /* position: relative; */
        margin: 0;
        margin-top: -240px;
        .login-form {
            border-radius: 10px;
            padding: 20px 50px 60px;
            background-color: rgba(255,255,255,1);
            /* position: absolute;
            top: 50%; */
            overflow: inherit;
            width: 504px;
            box-sizing: border-box;
            margin: 0;
            /* margin-top: -240px; */
            .system-title {
                font-size: 24px;
                color: #4a4a4a;
                /* width: 100px; */
                text-align: center;
                margin: 50px auto 20px;
                /* font-weight: 700; */
            }
        }
    }
    
}
.copy-right {
    /* border-top: 1px solid #999; */
    /* position: absolute; */
    width: 100%;
    text-align: center;
    left: 0px;
    bottom: -50px;
    /* background: #fff; */
}
.copy-right p {
    color:#93A4FF;
    font-size: 14px;
}
 
.fotgot-text {
    width: 100%;
    text-align: right;
} 



</style>