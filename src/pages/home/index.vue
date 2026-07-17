<template>
  <view class="home-page">
    <view class="form-container">
      <view class="form-header">
        <text class="form-title">信息登记</text>
        <text class="form-subtitle">请填写以下信息，所有字段均为必填项</text>
      </view>

      <wd-form ref="formRef" :model="formData" :schema="formSchema" error-type="message">
        <wd-cell-group border>
          <wd-form-item title="姓名" prop="name" required>
            <wd-input v-model="formData.name" placeholder="请输入姓名" :clearable="true"
              @blur="() => formRef?.validate('name')" />
          </wd-form-item>

          <wd-form-item title="手机号" prop="phone" required>
            <wd-input v-model="formData.phone" placeholder="请输入手机号" type="tel" :clearable="true" :maxlength="11"
              @blur="() => formRef?.validate('phone')" />
          </wd-form-item>

          <wd-form-item title="邮箱" prop="email" required>
            <wd-input v-model="formData.email" placeholder="请输入邮箱" :clearable="true"
              @blur="() => formRef?.validate('email')" />
          </wd-form-item>
        </wd-cell-group>
      </wd-form>

      <view class="submit-area">
        <wd-button type="primary" block size="large" :loading="submitting" @click="handleSubmit">
          提交1
        </wd-button>
        <wd-button type="success" block size="large" :loading="submitting" @click="handleSubmit">
          提交2
        </wd-button>
        <wd-button type="warning" block size="large" :loading="submitting" @click="handleSubmit">
          提交3
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type {
  FormSchema,
  FormInstance,
} from '@wot-ui/ui/components/wd-form/types'

const formRef = ref<FormInstance>()
const submitting = ref(false)

const formData = reactive({
  name: '',
  phone: '',
  email: '',
})

// 表单校验 schema
const formSchema: FormSchema = {
  validate(model) {
    const issues: { path: (string | number)[]; message: string }[] = []

    if (!model.name || !model.name.trim()) {
      issues.push({ path: ['name'], message: '请输入姓名' })
    }

    if (!model.phone || !model.phone.trim()) {
      issues.push({ path: ['phone'], message: '请输入手机号' })
    } else if (!/^1[3-9]\d{9}$/.test(model.phone)) {
      issues.push({ path: ['phone'], message: '请输入正确的手机号' })
    }

    if (!model.email || !model.email.trim()) {
      issues.push({ path: ['email'], message: '请输入邮箱' })
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(model.email)) {
      issues.push({ path: ['email'], message: '请输入正确的邮箱格式' })
    }

    return issues
  },
  isRequired(path: string) {
    return ['name', 'phone', 'email'].includes(path)
  },
}

const handleSubmit = async () => {
  if (!formRef.value) return

  const { valid, errors } = await formRef.value.validate()

  if (valid) {
    submitting.value = true
    // 模拟提交
    setTimeout(() => {
      submitting.value = false
      uni.showToast({
        title: '提交成功',
        icon: 'success',
      })
      console.log('表单数据：', { ...formData })
    }, 1000)
  } else {
    console.log('校验失败：', errors)
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.form-container {
  margin: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.form-header {
  padding: 32rpx 32rpx 16rpx;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.form-title {
  font-size: 40rpx;
  color: #333;
  font-weight: 600;
}

.form-subtitle {
  font-size: 24rpx;
  color: #999;
}

.submit-area {
  padding: 40rpx 32rpx 48rpx;
}
</style>
