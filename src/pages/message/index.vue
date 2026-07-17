<template>
  <view class="message-page">
    <wd-navbar title="消息" />
    <view class="message-content">
      <wd-empty description="暂无消息" icon="chat">
        <template #action>
          <wd-button type="primary" size="small" @click="onRefresh">刷新</wd-button>
        </template>
      </wd-empty>
    </view>
  </view>
</template>

<script setup lang="ts">
const onRefresh = () => {
  uni.showToast({
    title: '暂无新消息',
    icon: 'none',
  })
}
</script>

<style lang="scss" scoped>
.message-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.message-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200rpx;
}
</style>
