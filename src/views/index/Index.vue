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
              <el-menu-item index="systemSetting" @click="menuClick">
                 System Setting
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="general">
            <template #title>
              <span>General</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="generalCode" @click="menuClick">
                General Code
              </el-menu-item>
              <el-menu-item index="generalCdeGrp" @click="menuClick">
                General Code Group
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-main class="m-main-container">
        <el-tabs
          closable
          type="card"
          v-model="activeTab"
          @tab-remove="closeTab"
        >
          <el-tab-pane
            v-for="tab in visitedTabs"
            :key="tab.name"
            :label="tab.title"
            :name="tab.name"
          >
            <component
              :is="tab.component"
              :ref="tab.name"
              :key="tab.name"
            />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref, reactive, onMounted, watch } from 'vue';
  import TabRouter from '../../components/TabRoutes';
  import { equal } from '../../utils/ObjectUtils';

  const visitedTabs = ref([]);
  const cachedComponents = ref([]);
  const activeTab = ref('');

  function menuClick(item){
    const exists = visitedTabs.value.find(v => equal(v.name, item.index));
    const route  = TabRouter.find(r => equal(r.name, item.index));

    if(!exists && route){
      visitedTabs.value.push({
        title: route.title,
        name: route.name,
        component: route.component
      });

      activeTab.value = route.name;
    }
  }

  function closeTab(tabPaneName){
    visitedTabs.value = visitedTabs.value.filter(v => !equal(tabPaneName, v.name));
  }
</script>