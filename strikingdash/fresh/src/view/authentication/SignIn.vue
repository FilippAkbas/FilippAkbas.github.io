<template>
  <AuthWrapper>
    <div class="auth-contents">
      <a-form @finish="handleSubmit" :model="formState" layout="vertical">
        <sdHeading as="h3"> Giriş </sdHeading>
        <a-form-item name="username" label="Username/E-mail">
          <a-input type="email" v-model:value="formState.email" placeholder="Username" />
        </a-form-item>
        <a-form-item name="password" initialValue="123456" label="Password">
          <a-input type="password" v-model:value="formState.password" placeholder="Password" />
        </a-form-item>
        <a-form-item>
          <sdButton class="btn-signin" htmlType="submit" type="primary" size="large">
            {{ isLoading ? 'Loading...' : 'Giriş' }}
          </sdButton>
        </a-form-item>
      </a-form>
    </div>
  </AuthWrapper>
</template>
<script>
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons-vue';
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { AuthWrapper } from './style';
import { useRouter } from 'vue-router';
import { Auth0Lock } from 'auth0-lock';
import { auth0options } from '@/config/auth0';

const domain = process.env.VUE_APP_AUTH0_DOMAIN;
const clientId = process.env.VUE_APP_AUTH0_CLIENT_ID;

const SignIn = {
  name: 'SignIn',
  components: { FacebookOutlined, TwitterOutlined, AuthWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const isLoading = computed(() => state.auth.loading);
    const checked = ref(null);
    const router = useRouter();

    const handleSubmit = () => {
      router.push('/');
      dispatch('login');
    };
    const onChange = checked => {
      checked.value = checked;
    };

    const formState = reactive({
      email: 'example@email.com',
      password: '1234565',
    });

    const lock = new Auth0Lock(clientId, domain, auth0options);

    lock.on('authenticated', authResult => {
      lock.getUserInfo(authResult.accessToken, error => {
        if (error) {
          return;
        }

        handleSubmit();
        lock.hide();
      });
    });

    return {
      isLoading,
      checked,
      handleSubmit,
      onChange,
      formState,
      lock,
    };
  },
};

export default SignIn;
</script>
