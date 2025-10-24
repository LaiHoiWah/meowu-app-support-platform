import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/Login.vue')
    },{
      path: '/index',
      name: 'index',
      component: () => import('../views/index/Index.vue'),
      children: [{
        path: '/index/system/setting',
        name: 'systemSetting',
        meta: { title: 'System Setting', tab: true, cache: true },
        component: () => import('../views/index/system/Setting.vue')
      },{
        path: '/index/general/code',
        name: 'generalCode',
        meta: { title: 'General Code', tab: true, cache: true },
        component: () => import('../views/index/general/GeneralCode.vue')
      },{
        path: '/index/general/group',
        name: 'generalCodeGroup',
        meta: { title: 'General Code Group', tab: true, cache: true },
        component: () => import('../views/index/general/GeneralCdeGrp.vue')
      }]
    }
  ]
});

export default router;
