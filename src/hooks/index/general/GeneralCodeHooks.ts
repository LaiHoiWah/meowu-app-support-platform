import { ref, reactive, onMounted } from 'vue';

function GeneralCodeHooks(){

  // table fields
  const loading  = ref(false);
  const dataList = ref([]);
  const mockDataList = ref([]);

  // search
  const criteria = reactive({
    name: "",
    groupName: "",
    status: ""
  });

  // pagination
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
    pageSizes: [10, 20, 50, 100]
  });

  return {
    loading,
    dataList,
    criteria,
    pagination,
  };
};

export default GeneralCodeHooks;