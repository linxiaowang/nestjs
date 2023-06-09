<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

// do not use same name with ref
const form = reactive({
  account: '',
  password: '',
  code: '',
})

const codeUrl = ref<string>('/api/user/code')

const resetCode = ()=> codeUrl.value = codeUrl.value + '?' + Math.random()


const ruleFormRef = ref<FormInstance>()

async function submitForm() {
      fetch('/api/user/create', {
        method: 'post',
        body: JSON.stringify(form),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res);
      })
}
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="账号">
      <el-input v-model="form.account" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="验证码">
      <div class="flex">
        <el-input v-model="form.code" />
        <img @click="resetCode" :src="codeUrl"  />
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">
        提交
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>
