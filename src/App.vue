<script setup lang="ts">
import { ref } from "vue";

const test = ref(false);

const toggleSidebar = () => {
  test.value = !test.value;
};
</script>

<template>
  <el-container class="layout-container-demo">
    <el-header class="header">
      <el-row :gutter="10" :justify="'space-between'" :align="'middle'">
        <el-col :span="16">
          <el-row :gutter="20" :justify="'start'" :align="'middle'">
            <el-col :span="6">
              <div>
                <el-icon @click="toggleSidebar" :size="20"><Expand /></el-icon>
              </div>
            </el-col>
            <el-col :span="18">
              <div>Gipfel App</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3"
          ><div class="avatar">
            <el-avatar :size="35">alle</el-avatar>
          </div></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="side-menu" :collapse="test">
          <el-menu-item index="1"
            ><template #title>Start</template></el-menu-item
          >
          <el-menu-item index="2">
            <template #title>Besteigung</template></el-menu-item
          >
          <el-menu-item index="3"
            ><template #title>Meine Besteigungen</template></el-menu-item
          >
          <el-menu-item index="4"
            ><template #title>Alle Gipfel</template></el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-avatar {
  margin-right: 30px;
}

.layout-container-demo .el-header .el-row {
  height: 40px;
}

.layout-container-demo .el-header {
  padding: 10px;
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  width: auto;
  height: 100vh -80px;
}

.side-menu {
  border-right: none;
  background: var(--el-color-primary-light-8);
}

.side-menu:is(.el-menu--collapse) {
  width: 0px;
}

.layout-container-demo .el-main {
  padding: 10px;
}
body {
  margin: 0px;
}
</style>
