import { ref, reactive, onMounted } from 'vue';
import { isNotNull, equal } from '../../../utils/ObjectUtils';

function GeneralCdeGrpHooks(){
  // table fields
  const loading  = ref(false);
  const dataList = ref([]);
  const mockDataList = ref([]);

  // dialog fields
  const addGroupDialogVisible  = ref(false);
  const editGroupDialogVisible = ref(false);
  const addGroup = ref({
    name: ""
  });
  const editGroup = ref({
    name: "",
    status: "",
    createTime: null,
    updateTime: null,
    deleteTime: null,
  });

  // search
  const criteria = reactive({
    name: "",
    status: ""
  });

  // pagination
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
    pageSizes: [10, 20, 50, 100]
  });

  // fetch data
  const fetchData = async () => {
    try{
      // loading animation
      loading.value = true;

      // pagination
      const currentPage = pagination.currentPage;
      const pageSize    = pagination.pageSize;
      // criteria
      const searchName   = criteria.name;
      const searchStatus = criteria.status;

      // get data
      // TODO mock request API
      dataList.value = mockDataList.value.filter(r => {
        if(isNotNull(searchName) && !equal(r.name, searchName)){
          return false;
        }
        if(isNotNull(searchStatus) && !equal(r.status, searchStatus)){
          return false;
        }

        return true;
      });
    }catch(error){
      console.error(error);
    }finally{
      loading.value = false;
    }
  };

  // reset criteria
  const reset = () => {
    criteria.name           = "";
    criteria.status         = "";
    criteria.createTimeFrom = null;
    criteria.createTimeTo   = null;
    criteria.updateTimeFrom = null;
    criteria.updateTimeTo   = null;
    criteria.deleteTimeFrom = null;
    criteria.deleteTimeTo   = null;
  };

  // refresh
  const refresh = () => {
    // re-fetch data from page no.1
    pagination.currentPage = 1;
    reset();
    fetchData();
  };

  // add new record
  const openAddGroupDialog = () => {
    addGroup.value = {
      name: ""
    };

    addGroupDialogVisible.value = true;
  };

  const closeAddGroupDialog = () => {
    addGroup.value = {
      name: ""
    };

    addGroupDialogVisible.value = false;
  };

  const confirmAddGroup = () => {
    try{
      // request API
      // TODO mock request API
      addGroup.value.status = "A";
      addGroup.value.createTime = new Date();
      addGroup.value.codeTotal = 0;
      mockDataList.value.push(addGroup.value);

      // re-fetch data from page no.1
      pagination.currentPage = 1;
      fetchData();
    }catch(error){
      console.error(error);
    }finally{
      closeAddGroupDialog();
    }
  };

  // edit group
  const openEditGroupDialog = (data) => {
    console.log(data);

    editGroup.value.name       = data.name;
    editGroup.value.status     = data.status;
    editGroup.value.createTime = data.createTime;
    editGroup.value.updateTime = data.updateTime;
    editGroup.value.deleteTime = data.deleteTime;

    editGroupDialogVisible.value = true;
  };

  const closeEditGroupDialog = () => {
    editGroup.value = {
      name: "",
      status: "",
      createTime: null,
      updateTime: null,
      deleteTime: null
    };
    editGroupDialogVisible.value = false;
  };

  const confirmEditGroup = () => {
    try{
      // request API
      // TODO mock request API
      mockDataList.value.forEach(r => {
        if(equal(r.name, editGroup.value.name)){
          r.status = editGroup.value.status;
          r.updateTime = new Date();

          if(r.status === 'D'){
            r.deleteTime = new Date();
          }else{
            r.deleteTime = null;
          }
        }
      });

      // re-fetch data from page no.1
      pagination.currentPage = 1;
      fetchData();
    }catch(error){
      console.error(error);
    }finally{
      closeEditGroupDialog();
    }
  };


  return {
    loading,
    dataList,
    addGroupDialogVisible,
    editGroupDialogVisible,
    addGroup,
    editGroup,
    criteria,
    pagination,
    fetchData,
    refresh,
    openAddGroupDialog,
    closeAddGroupDialog,
    confirmAddGroup,
    openEditGroupDialog,
    closeEditGroupDialog,
    confirmEditGroup
  };
};

export default GeneralCdeGrpHooks;
