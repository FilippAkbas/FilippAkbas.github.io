<template>
  <div class="full-width-table">
    <sdCards title="Trafik Kanalları" more>
      <template #more>
        <router-link to="#">
          <sdFeatherIcons size="16" type="printer" />
          <span>Printer</span>
        </router-link>
        <router-link to="#">
          <sdFeatherIcons size="16" type="book-open" />
          <span>PDF</span>
        </router-link>
        <router-link to="#">
          <sdFeatherIcons size="16" type="file-text" />
          <span>Google Sheets</span>
        </router-link>
        <router-link to="#">
          <sdFeatherIcons size="16" type="x" />
          <span>Excel (XLSX)</span>
        </router-link>
        <router-link to="#">
          <sdFeatherIcons size="16" type="file" />
          <span>CSV</span>
        </router-link>
      </template>
      <template #button>
        <div class="card-nav">
          <ul>
            <li :class="landing === 'week' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeLanding(e, 'week')" to="#">
                Haftalık
              </router-link>
            </li>
            <li :class="landing === 'month' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeLanding(e, 'month')" to="#">
                Aylık
              </router-link>
            </li>
            <li :class="landing === 'year' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeLanding(e, 'year')" to="#">
                Yıllık
              </router-link>
            </li>
          </ul>
        </div>
      </template>
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
    title: 'Kanallar',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Oturumlar',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Hedef Tam. Oranı',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Tamamlanan Hedefler',
    dataIndex: 'ctr',
    key: 'ctr',
  },
  {
    title: 'Trafik Yüzdesi (%)',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Değer',
    dataIndex: 'value',
    key: 'value',
  },
];

const TopLandingPagesOne = {
  name: 'TopLandingPagesOne',
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
                  Homepage1
                </router-link>
              ),
              sessions: landingState.value.direct.sessions,
              rate: `${landingState.value.direct.rate}%`,
              ctr: landingState.value.direct.goals,
              percentage: (
                <a-progress
                  percent={parseInt(landingState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${landingState.value.direct.percent}%`,
            },
            {
              key: '2',
              pages: (
                <router-link to="#" class="page-title">
                  Our Service
                </router-link>
              ),
              sessions: landingState.value.email.sessions,
              rate: `${landingState.value.email.rate}%`,
              ctr: landingState.value.email.goals,
              percentage: (
                <a-progress
                  percent={parseInt(landingState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${landingState.value.email.percent}%`,
            },
            {
              key: '3',
              pages: (
                <router-link to="#" class="page-title">
                  List of Products
                </router-link>
              ),
              sessions: landingState.value.search.sessions,
              rate: `${landingState.value.search.rate}%`,
              ctr: landingState.value.search.goals,
              percentage: (
                <a-progress
                  percent={parseInt(landingState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${landingState.value.search.percent}%`,
            },
            {
              key: '4',
              pages: (
                <router-link to="#" class="page-title">
                  Contact us
                </router-link>
              ),
              sessions: landingState.value.media.sessions,
              rate: `${landingState.value.media.rate}%`,
              ctr: landingState.value.media.goals,
              percentage: (
                <a-progress
                  percent={parseInt(landingState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${landingState.value.media.percent}%`,
            },
            {
              key: '5',
              pages: (
                <router-link to="#" class="page-title">
                  Products
                </router-link>
              ),
              sessions: landingState.value.other.sessions,
              rate: `${landingState.value.other.rate}%`,
              ctr: landingState.value.other.goals,
              percentage: (
                <a-progress
                  percent={parseInt(landingState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${landingState.value.other.percent}%`,
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

export default TopLandingPagesOne;
</script>
