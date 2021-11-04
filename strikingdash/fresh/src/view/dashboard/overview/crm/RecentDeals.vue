<template>
  <div class="full-width-table">
    <sdCards title="Paylaşılacak Üyeler" bodypadding="0px">
      <template #button>
        <sdButton class="btn-add_new" size="default" key="1" type="default" :outlined="true">
          <sdFeatherIcons type="plus" size="14" /> Add Users
        </sdButton>
      </template>
      <RecentDealsWrapper>
        <div class="table-bordered recent-deals-table table-responsive">
          <a-table :columns="sellingColumns" :dataSource="sellingData" :pagination="false" :showHeader="false" />
        </div>
      </RecentDealsWrapper>
    </sdCards>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { RecentDealsWrapper } from '../../style';

const sellingColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const RecentDeals = {
  name: 'RecentDeals',
  components: { RecentDealsWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const products = ref('year');
    const recentDealState = computed(() => state.chartContent.recentDealData);
    onMounted(() => dispatch('recentDealGetData'));

    const handleActiveChangeProducts = (event, value) => {
      event.preventDefault();
      products.value = value;
      dispatch('recentDealFilterData', value);
    };

    const sellingData = computed(() =>
      recentDealState.value
        ? recentDealState.value.map(value => {
            const { key, name, date, img } = value;
            return {
              key,
              name: (
                <div class="dealing-author">
                  <img src={require(`../../../../${img}`)} alt="" />
                  <div class="dealing-author-info">
                    <h4>{name}</h4>
                    <p>{date}</p>
                  </div>
                </div>
              ),
            };
          })
        : [],
    );

    return {
      recentDealState,
      products,
      handleActiveChangeProducts,
      sellingColumns,
      sellingData,
    };
  },
};

export default RecentDeals;
</script>
