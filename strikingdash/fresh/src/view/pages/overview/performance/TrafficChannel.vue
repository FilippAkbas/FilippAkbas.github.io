<template>
  <div class="full-width-table">
    <sdCards title="En Düşük Trafik Alan Sayfalar" more>
      <template #button>
        <div class="card-nav">
          <ul>
            <li :class="traffic === 'week' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeTraffic(e, 'week')" to="#">
                Haftalık
              </router-link>
            </li>
            <li :class="traffic === 'month' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeTraffic(e, 'month')" to="#">
                Aylık
              </router-link>
            </li>
            <li :class="traffic === 'year' ? 'active' : 'deactivate'">
              <router-link @click="e => handleActiveChangeTraffic(e, 'year')" to="#">
                Yıllık
              </router-link>
            </li>
          </ul>
        </div>
      </template>
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
      <TrafficTableWrapper>
        <div class="table-bordered table-responsive">
          <a-table :columns="locationColumns" :dataSource="locationData" :pagination="false" />
        </div>
      </TrafficTableWrapper>
    </sdCards>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { TrafficTableWrapper } from '../../style';

const locationColumns = [
  {
    title: 'Landing Pages',
    dataIndex: 'sayfalar',
    key: 'sayfalar',
  },
  {
    title: 'Session',
    dataIndex: 'gelen',
    key: 'gelen',
  },
  {
    title: 'Bounce Rate',
    dataIndex: 'siteler',
    key: 'siteler',
  },
  {
    title: 'CTR',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'value',
    key: 'value',
  },
];

const TrafficChannel = {
  name: 'TrafficChannel',
  components: {
    TrafficTableWrapper,
  },
  setup() {
    const store = useStore();
    const traffic = ref('year');
    const trafficState = computed(() => store.state.chartContent.trafficChanelData);

    const locationData = computed(() =>
      trafficState.value
        ? [
            {
              key: '1',
              sayfalar: 'Homepage',
              gelen: trafficState.value.direct.sessions,
              siteler: trafficState.value.direct.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.direct.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-dt progress-primary"
                />
              ),
              value: `${trafficState.value.direct.value}%`,
            },
            {
              key: '2',
              sayfalar: 'Our Service',
              gelen: trafficState.value.email.sessions,
              siteler: trafficState.value.email.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.email.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-et progress-secondary"
                />
              ),
              value: `${trafficState.value.email.value}%`,
            },
            {
              key: '3',
              sayfalar: 'List of Products',
              gelen: trafficState.value.search.sessions,
              siteler: trafficState.value.search.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.search.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-ost progress-success"
                />
              ),
              value: `${trafficState.value.search.value}%`,
            },
            {
              key: '4',
              sayfalar: 'Contact Us',
              gelen: trafficState.value.referral.sessions,
              siteler: trafficState.value.referral.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.referral.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-rt progress-info"
                />
              ),
              value: `${trafficState.value.referral.value}%`,
            },
            {
              key: '5',
              sayfalar: 'Products',
              gelen: trafficState.value.media.sessions,
              siteler: trafficState.value.media.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.media.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-smt progress-warning"
                />
              ),
              value: `${trafficState.value.media.value}%`,
            },
            {
              key: '6',
              sayfalar: 'www.618media.com',
              gelen: trafficState.value.other.sessions,
              siteler: trafficState.value.other.goals,
              percentage: (
                <a-progress
                  percent={parseInt(trafficState.value.other.percent)}
                  strokeWidth={5}
                  status="active"
                  showInfo={false}
                  class="progress-ot progress-danger"
                />
              ),
              value: `${trafficState.value.other.value}%`,
            },
          ]
        : [],
    );

    const handleActiveChangeTraffic = (event, value) => {
      event.preventDefault();
      traffic.value = value;
      return store.dispatch('trafficChanelFilterData', value);
    };

    onMounted(() => {
      store.dispatch('trafficChanelGetData');
    });
    return {
      trafficState,
      traffic,
      handleActiveChangeTraffic,
      locationColumns,
      locationData,
    };
  },
};

export default TrafficChannel;
</script>
