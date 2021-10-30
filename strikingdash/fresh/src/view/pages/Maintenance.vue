<template>
  <div>
    <Main>
      <MaintananceWrapper>
        <img :src="require(`../../static/img/pages/maintenance.svg`)" alt="maintenance" />
        <sdHeading as="h3">We are currently performing maintenance</sdHeading>
        <p>
          We&rsquo;re making the system more awesome. <br />
          We&rsquo;ll be back shortly.
        </p>
      </MaintananceWrapper>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { MaintananceWrapper } from './style';
export default {
  name: 'Maintenance',
  components: {
    Main,
    MaintananceWrapper,
  },
  data() {
    return {};
  },
};
</script>
