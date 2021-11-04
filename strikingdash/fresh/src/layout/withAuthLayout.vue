<template>
  <a-row>
    <a-col :xxl="24" :xl="24" :lg="24" :md="24" :xs="24">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>
<script>
import { Aside, Content } from './style';

const AuthLayout = {
  name: 'AuthLayout',
  components: { Aside, Content },
};

export default AuthLayout;
</script>
