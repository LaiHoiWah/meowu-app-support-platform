<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>General</el-breadcrumb-item>
    <el-breadcrumb-item>Group</el-breadcrumb-item>
  </el-breadcrumb>

  <el-table
    :data="data"
    current-row-key="id"
    stripe
    border
    highlight-current-row
  >
    <el-table-column header-align="center" align="center" label="Name" prop="name"/>

    <el-table-column header-align="center" align="center" label="Status" prop="status">
      <template #default="scope">
        {{ recordStatusFormat(scope.row.status, '-') }}
      </template>
    </el-table-column>

    <el-table-column header-align="center" align="center" label="Create Time" prop="createTime">
      <template #default="scope">
        {{ timestampFormat(scope.row.createTime, '-', 'DD-MMM-YYYY HH:mm:ss') }}
      </template>
    </el-table-column>

    <el-table-column header-align="center" align="center" label="Update Time" prop="updateTime">
      <template #default="scope">
          {{ timestampFormat(scope.row.updateTime, '-', 'DD-MMM-YYYY HH:mm:ss') }}
      </template>
    </el-table-column>

    <el-table-column header-align="center" align="center" label="Delete Time" prop="deleteTime">
      <template #default="scope">
        {{ timestampFormat(scope.row.deleteTime, '-', 'DD-MMM-YYYY HH:mm:ss') }}
      </template>
    </el-table-column>

    <el-table-column header-align="center" align="center" label="Action">
      <template #default="scope">
        <a href="">Edit</a>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    v-model:current-page="pagination.currentPage"
    v-model:page-size="pagination.pageSize"
    v-loading="loading"
    @size-change="pageSizeChangeHandler"
    @current-change="currentPageChangeHandler"
    :total="pagination.total"
    :page-sizes="pagination.pageSizes"
    :hide-on-single-page="false"
    layout="total, prev, pager, next, sizes"
    size="small"
  />
</template>

<script setup>
  import { ref, reactive, onMounted, computed } from 'vue';
  import { recordStatusFormat, timestampFormat } from '../../../utils/FormatterUtils';
  import { ArrowRight } from '@element-plus/icons-vue';

  const loading = ref(false);
  const data = ref([]);

  // pagination
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
    pageSizes: [10, 20, 50, 100]
  });

  // page size change handler
  const pageSizeChangeHandler = (newSize) => {
    pagination.pageSize = newSize;
    pagination.currentPage = 1;
    // fetch data
    fetchData();
  };

  // current page change handler
  const currentPageChangeHandler = (newPage) => {
    pagination.currentPage = newPage;
    // fetch data
    fetchData();
  };

  // fetch data
  const fetchData = async() => {
    loading.value = true;

    try{
      await new Promise(resolve => setTimeout(resolve, 500));

      data.value = [{
        id: 1,
        name: "Sex",
        status: "A",
        createTime: 1705732800123,
        updateTime: 1705732800000,
        deleteTime: ''
      },{
        id: 2,
        name: "City",
        status: "D",
        createTime: 1705732800123,
        updateTime: 1705732800000,
        deleteTime: ''
      }];

      pagination.total = data.value.length;
    }catch(error){
      console.error(error);
    }finally{
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });
</script>