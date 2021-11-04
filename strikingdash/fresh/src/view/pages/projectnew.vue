<template>
  <Main>
    <a-row justify="center" :gutter="25">
      <a-col :xxl="24" :xl="24" :lg="24" :xs="24">
        <Suspense>
          <template #default>
            <CardGroup />
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

const CardGroup = defineAsyncComponent(() => import('./overview/project/CardGroup'));

const projectnew = {
  name: 'projectnew',
  components: {
    Main,
    CardGroup,
  },
};

export default projectnew;
</script>
