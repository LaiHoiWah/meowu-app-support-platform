import SystemSetting from '../views/index/system/Setting.vue';
import GeneralCdeGrp from '../views/index/general/GeneralCdeGrp.vue';
import GeneralCode from '../views/index/general/GeneralCode.vue';

const TabRoutes = [{
  title: 'System Setting',
  name: 'systemSetting',
  cache: true,
  component: SystemSetting
},{
  title: 'General Code Group',
  name: 'generalCdeGrp',
  cache: true,
  component: GeneralCdeGrp
},{
  title: 'General Code',
  name: 'generalCode',
  cache: true,
  component: GeneralCode
}];

export default TabRoutes;