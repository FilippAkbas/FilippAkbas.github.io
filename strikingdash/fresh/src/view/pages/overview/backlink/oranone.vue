<template>
  <div class="full-width-table">
    <sdCards title="En Fazla Backlink Olan Sayfalar">
      <LadingPages>
        <div class="table-bordered table-responsive">
          <a-table :columns="landingColumns" :dataSource="landingData" :pagination="false" />
        </div>
      </LadingPages>
    </sdCards>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { LadingPages } from '../../style';

const landingColumns = [
  {
    title: 'Sayfalar',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Bağlantı Sayısı',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Oran',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Toplam Domaın Sayısı',
    dataIndex: 'ctr',
    key: 'ctr',
  },
];

const OranOne = {
  name: 'OranOne',
  components: { LadingPages },
  setup() {
    const store = useStore();
    const landing = ref('year');
    const landingState = computed(() => store.state.chartContent.landingPageData);

    const landingData = computed(() =>
      landingState.value !== null
        ? [
            {
              key: '1',
              pages: (
                <router-link to="#" class="page-title">
                  www.618media.com
                </router-link>
              ),
              sessions: landingState.value.direct.sessions,
              rate: `${landingState.value.direct.rate}%`,
              ctr: landingState.value.direct.goals,
            },
            {
              key: '2',
              pages: (
                <router-link to="#" class="page-title">
                  www.618media.com
                </router-link>
              ),
              sessions: landingState.value.email.sessions,
              rate: `${landingState.value.email.rate}%`,
              ctr: landingState.value.email.goals,
            },
            {
              key: '3',
              pages: (
                <router-link to="#" class="page-title">
                  www.618media.com
                </router-link>
              ),
              sessions: landingState.value.search.sessions,
              rate: `${landingState.value.search.rate}%`,
              ctr: landingState.value.search.goals,
            },
            {
              key: '4',
              pages: (
                <router-link to="#" class="page-title">
                  www.618media.com
                </router-link>
              ),
              sessions: landingState.value.media.sessions,
              rate: `${landingState.value.media.rate}%`,
              ctr: landingState.value.media.goals,
            },
            {
              key: '5',
              pages: (
                <router-link to="#" class="page-title">
                  www.618media.com
                </router-link>
              ),
              sessions: landingState.value.other.sessions,
              rate: `${landingState.value.other.rate}%`,
              ctr: landingState.value.other.goals,
            },
          ]
        : [],
    );

    const handleActiveChangeLanding = (event, value) => {
      event.preventDefault();
      landing.value = value;
      store.dispatch('landingPageFilterData', value);
    };

    onMounted(() => {
      store.dispatch('landingPageGetData');
    });
    return {
      landingState,
      landing,
      handleActiveChangeLanding,
      landingData,
      landingColumns,
    };
  },
};

export default OranOne;
</script>
