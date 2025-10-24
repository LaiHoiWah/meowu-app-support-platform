<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>General</el-breadcrumb-item>
    <el-breadcrumb-item>Code</el-breadcrumb-item>
  </el-breadcrumb>

  <el-form
      label-position="right"
      label-width="80px"
      size="small"
      class="search-bar"
      :model="criteria"
  >
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="8">
        <el-form-item label="Name">
          <el-input placeholder="Name" v-model="criteria.name"/>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8">
        <el-form-item label="Group Name">
          <el-input placeholder="Group Name" v-model="criteria.groupName"/>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8">
        <el-form-item label="Status">
          <el-select
            multiple
            clearable
            filterable
            placeholder="Status"
            label-position="right"
            v-model="criteria.status"
          >
            <el-option
              v-for="item in RecordStatus"
              :key="item.code"
              :label="item.description"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="24">
        <el-form-item class="el-form-item-button">
          <el-button :icon="Search" @click="fetchData" size="small" type="primary">Search</el-button>
          <el-button :icon="Refresh" @click="refresh" size="small" type="primary">Refresh</el-button>
          <el-button :icon="CirclePlus" @click="openAddCodeDialog" size="small">Add</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

  <el-table
    :data="dataList"
    current-row-key="id"
    size="small"
    v-loading="loading"
    stripe
    highlight-current-row
  >
    <el-table-column header-align="center" align="center" label="Name" prop="name"/>

    <el-table-column header-align="center" align="center" label="Status" prop="status">
      <template #default="scope">
        {{ recordStatusFormat(scope.row.status, '-') }}
      </template>
    </el-table-column>

    <el-table-column header-align="center" align="center" label="Group Name" prop="groupName"/>

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
        <el-button :icon="Edit" size="small" @click="openEditGroupDialog(scope.row)"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
  import { ArrowRight, Search, Refresh, CirclePlus, Delete, Edit } from '@element-plus/icons-vue';
  import { onMounted } from 'vue';
  import { recordStatusFormat, timestampFormat } from '../../../utils/FormatterUtils';
  import GeneralCodeHooks from '../../../hooks/index/general/GeneralCodeHooks';
  import RecordStatus from '../../../components/RecordStatus';

  const {
    loading,
    dataList,
    criteria,
    pagination,
  } = GeneralCodeHooks();

  onMounted(() => {

  });
</script>