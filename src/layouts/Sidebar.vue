<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @select="handleMenuSelect"
  >
    <a-menu-item
      key="/"
    >
      <span>首页</span>
    </a-menu-item>
    <a-sub-menu key="common">
      <template #title>
        常用
      </template>
      <a-menu-item key="/tools">
        工具箱
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'MkSidebar',
  setup() {
    const openKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>([]);

    return {
      openKeys,
      selectedKeys,
    };
  },
  methods: {
    // 菜单选中
    handleMenuSelect({ key }: any) {
      if (key.startsWith('/')) {
        this.$router.push({ path: key });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
