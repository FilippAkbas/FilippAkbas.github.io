<template>
  <div style="margin-top: 25px;">
    <Main>
      <a-row :gutter="25">
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
        <a-col :xxl="16" :xs="12">
          <Suspense>
            <template #default>
              <OranOne />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :xs="12">
          <Suspense>
            <template #default>
              <OranTwo />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :xs="12">
          <Suspense>
            <template #default>
              <OranTree />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :xs="12">
          <Suspense>
            <template #default>
              <OranFour />
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
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { Main } from '../styled';

const TrafficChannel = defineAsyncComponent(() => import('@/view/dashboard/overview/performance/TrafficChannel'));
const OranOne = defineAsyncComponent(() => import('./overview/backlink/oranone'));
const OranTwo = defineAsyncComponent(() => import('./overview/backlink/orantwo'));
const OranTree = defineAsyncComponent(() => import('./overview/backlink/orantree'));
const OranFour = defineAsyncComponent(() => import('./overview/backlink/oranfour'));

export default {
  name: 'backlink',
  components: {
    Main,
    TrafficChannel,
    OranOne,
    OranTwo,
    OranTree,
    OranFour,
  },
};
</script>
