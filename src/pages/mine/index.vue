<template>
  <view class="mine-page">
    <wd-navbar title="我的" />
    <view class="mine-content">
      <view class="user-info">
        <wd-img width="120" height="120" round src="/static/logo.png" />
        <wd-text text="用户昵称" size="18" color="#333" />
        <wd-text text="点击登录" size="12" color="#999" />
      </view>

      <view class="menu-list">
        <wd-cell-group>
          <wd-cell title="我的订单" icon="cart" is-link />
          <wd-cell title="收货地址" icon="map" is-link />
          <wd-cell title="设置" icon="setting" is-link />
        </wd-cell-group>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 我的页面逻辑
</script>

<style lang="scss" scoped>
.mine-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.mine-content {
  padding: 30rpx;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60rpx 0 40rpx;
  gap: 16rpx;
}

.menu-list {
  margin-top: 30rpx;
}
</style>
