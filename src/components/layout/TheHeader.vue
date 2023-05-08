<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <router-link to="/" class="no-underline">
      <el-menu-item>TODO</el-menu-item>
    </router-link>
    <div class="flex-grow" />
    <router-link to="/">
      <el-menu-item index="1">Home</el-menu-item>
    </router-link>
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu> -->
    <router-link to="/auth" v-if="!isLogedIn">
      <el-menu-item index="3">Login</el-menu-item>
    </router-link>
    <router-link to="/auth" v-else>
      <el-menu-item index="3" @click="logout">Logout</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath);
};
const store = useStore();
const router = useRouter();

const isLogedIn = computed(() => {
  return store.getters.isAuthenticated;
});

const logout = () => {
  store.dispatch("logout");
  router.replace("/auth");
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
