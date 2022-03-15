<template>
  <div class="login">
    <el-form
    class="login-form"
    :rules="rules"
    label-position="top"
    ref="form"
    :model="form"
    label-width="80px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="isLoginLoading" login-btn type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/services/user'
export default {
  data() {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      },
      isLoginLoading: false
    }
  },
  methods: {
    async onSubmit() {
      try {
        // 表单验证
        await this.$refs.form.validate()
        this.isLoginLoading = true
        // 提交表单
        const { data } = await login(this.form)
        // 失败给出提示
        if (data.state !== 1) {
          this.$message.error(data.message)
        } else {
          // 登录成功 记录登录状态到vuex
          this.$store.commit('setUser', data.content)
          this.$router.push({
            name: 'home'
          })
        }
      } catch (error) {
        console.log('登錄失敗', error)
      }
      this.isLoginLoading = false
    }
  }
}
</script>
<style lang='scss'  scoped>
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form{
    background: #fff;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    .login-btn{
      width: 100%;
    }
  }
}
</style>
