<template>
  <div style="margin-top: 25px;">
    <Main>
      <a-row :gutter="25">
        <a-col :xs="16">
          <a-card size="small" style="padding: 0;" title="Raporların Paylaşıldığı E-postalar">
            <UserListTable />
          </a-card>
        </a-col>
        <a-col :xs="8">
          <RecentDeals />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import UserListTable from '@/view/apps/users/overview/UserTable';
import { computed, ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { Main } from '../styled';

const RecentDeals = defineAsyncComponent(() => import('@/view/dashboard/overview/crm/RecentDeals'));

export default {
  name: 'ayarlar',
  components: {
    Main,
    UserListTable,
    RecentDeals,
  },
  setup() {
    const { state } = useStore();
    const searchData = computed(() => state.headerSearchData);
    const selectedRowKeys = ref(0);
    const selectedRows = ref(0);

    return {
      searchData,
      selectedRowKeys,
      selectedRows,
    };
  },
};
</script>
