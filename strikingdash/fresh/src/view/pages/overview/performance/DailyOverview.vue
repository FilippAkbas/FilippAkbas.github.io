<template>
  <OverviewCard>
    <div class="d-flex align-items-center justify-content-between overview-head">
      <sdHeading as="h4">Günlük Genel Bakış</sdHeading>
      <sdDropdown>
        <sdButton type="default"> Dışa Aktar <sdFeatherIcons type="chevron-down" size="14" /> </sdButton>
      </sdDropdown>
    </div>
    <div class="overview-box">
      <sdCards headless>
        <div class="d-flex align-items-center justify-content-between">
          <div class="overview-box-single">
            <sdHeading as="h2" class="color-primary">
              5,461
            </sdHeading>
            <p>Günlük Kullanıcı</p>
          </div>
          <div class="overview-box-single text-right">
            <sdHeading as="h2">8,085</sdHeading>
            <p>Tahmini Kullanıcı</p>
          </div>
        </div>

        <a-progress :percent="70" :showInfo="false" class="progress-primary" />

        <p>
          <span class="growth-upward">
            <sdFeatherIcons type="arrow-up" size="14" />
            25% <span>Düne Gore</span>
          </span>
          <span class="overview-box-percentage" :style="{ float: !rtl ? 'right' : 'left' }">
            70%
          </span>
        </p>
      </sdCards>
    </div>

    <div class="overview-box">
      <sdCards headless>
        <div class="d-flex align-items-center justify-content-between">
          <div class="overview-box-single">
            <sdHeading as="h2" class="color-info">
              140
            </sdHeading>
            <p>Dünkü Kullanıcı Sayısı</p>
          </div>
          <div class="overview-box-single text-right">
            <sdHeading as="h2">120</sdHeading>
            <p>Dünkü Tahmini Kullanıcı</p>
          </div>
        </div>
        <a-progress :percent="70" :showInfo="false" />
        <p>
          <span class="growth-downward">
            <sdFeatherIcons type="arrow-down" size="14" />
            25% <span>Bir Önceki Güne Göre</span>
          </span>
          <span class="overview-box-percentage" :style="{ float: !rtl ? 'right' : 'left' }">
            70%
          </span>
        </p>
      </sdCards>
    </div>
  </OverviewCard>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { OverviewCard } from '../../style';

const DailyOverview = {
  name: 'DailyOverview',
  components: { OverviewCard },
  setup() {
    const store = useStore();
    const rtl = computed(() => store.state.themeLayout.rtl);
    return {
      rtl,
    };
  },
};

export default DailyOverview;
</script>
