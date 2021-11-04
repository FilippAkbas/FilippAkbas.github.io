<template>
  <Main>
    <a-row justify="center" :gutter="25">
      <a-col :xxl="8" :xl="10" :lg="12" :xs="24">
        <Suspense>
          <template #default>
            <DailyOverview />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="16" :xl="14" :lg="12" :xs="24">
        <Suspense>
          <template #default>
            <WebsitePerformance />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="12" :xl="16" :md="12" :xs="24">
        <Suspense>
          <template #default>
            <TopLandingPagesOne />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="8" :xl="8" :md="12" :xs="24">
        <Suspense>
          <template #default>
            <SessionsByDeviceOne />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="12" :xl="16" :md="12" :xs="24">
        <Suspense>
          <template #default>
            <TopLandingPagesTwo />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="8" :xl="8" :md="12" :xs="24">
        <Suspense>
          <template #default>
            <SessionsByDeviceTwo />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="16" :xs="24">
        <Suspense>
          <template #default>
            <TrafficChannel />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="24" :xl="24" :md="24" :xs="24">
        <Suspense>
          <template #default>
            <SessionsbyRegion />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { Main } from '../styled';
import { defineAsyncComponent } from 'vue';

const DailyOverview = defineAsyncComponent(() => import('./overview/performance/DailyOverview'));
const WebsitePerformance = defineAsyncComponent(() => import('./overview/performance/WebsitePerformance'));
const TrafficChannel = defineAsyncComponent(() => import('./overview/performance/TrafficChannel'));
const SessionsByDeviceOne = defineAsyncComponent(() => import('./overview/performance/SessionsByDeviceOne'));
const SessionsByDeviceTwo = defineAsyncComponent(() => import('./overview/performance/SessionsByDeviceTwo'));
const TopLandingPagesOne = defineAsyncComponent(() => import('./overview/performance/TopLandingPagesOne'));
const TopLandingPagesTwo = defineAsyncComponent(() => import('./overview/performance/TopLandingPagesTwo'));
const SessionsbyRegion = defineAsyncComponent(() => import('./overview/performance/SessionsbyRegion'));

const dashboardnew = {
  name: 'dashboardnew',
  components: {
    Main,
    DailyOverview,
    TopLandingPagesOne,
    TopLandingPagesTwo,
    WebsitePerformance,
    TrafficChannel,
    SessionsByDeviceOne,
    SessionsByDeviceTwo,
    SessionsbyRegion,
  },
};

export default dashboardnew;
</script>
