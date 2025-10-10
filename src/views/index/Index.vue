<template>
  <el-container class="m-layout-container">
    <el-header style="border-bottom: 1px solid #ebeef5;">
      Header
    </el-header>

    <el-container>
      <el-aside class="m-aside-container">
        <el-menu
          mode="vertical"
          @unique-opened="true"
          style="height: 100%;"
        >
          <el-sub-menu index="system">
            <template #title>
              <span>System</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="system/setting">
                <router-link to="/index/system/setting">
                  System Setting
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="general">
            <template #title>
              <span>General</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="general/code">
                <router-link to="/index/general/code">
                  General Code
                </router-link>
              </el-menu-item>
              <el-menu-item index="general/group">
                <router-link to="/index/general/group">
                  General Code Group
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-main class="m-main-container">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>