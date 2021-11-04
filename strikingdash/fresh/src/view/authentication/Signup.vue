<template>
  <AuthWrapper>
    <p class="auth-notice">Already have an account? <router-link to="/auth/login">Sign In</router-link></p>
    <div class="auth-contents">
      <a-form name="register" :model="formState" @finish="handleSubmit" layout="vertical">
        <sdHeading as="h3"> Sign Up to <span class="color-secondary">Admin</span> </sdHeading>
        <a-form-item label="İsim" name="name">
          <a-input v-model:value="formState.name" placeholder="İsim" />
        </a-form-item>
        <a-form-item name="username" label="Soyisim">
          <a-input v-model:value="formState.username" placeholder="Soyisim" />
        </a-form-item>
        <a-form-item name="email" label="E-Posta">
          <a-input type="email" v-model:value="formState.email" placeholder="name@example.com" />
        </a-form-item>
        <a-form-item label="Şifre" name="password">
          <a-input type="password" v-model:value="formState.password" placeholder="Şifre" />
        </a-form-item>
        <div class="auth-form-action">
          <a-checkbox @change="onChange">
            Creating an account means you’re okay with our Terms of Service and Privacy Policy
          </a-checkbox>
        </div>
        <a-form-item>
          <sdButton class="btn-create" htmlType="submit" type="primary" size="large">
            Create Account
          </sdButton>
        </a-form-item>
        <p class="form-divider">
          <span>Or</span>
        </p>
        <ul class="social-login signin-social">
          <li>
            <a class="google-signup" href="#">
              <img :src="require('@/static/img/google.png')" alt="" />
              <span>Sign up with Google</span>
            </a>
          </li>
          <li>
            <a class="facebook-sign" href="#">
              <FacebookOutlined />
            </a>
          </li>
          <li>
            <a class="twitter-sign" href="#">
              <TwitterOutlined />
            </a>
          </li>
        </ul>
      </a-form>
    </div>
  </AuthWrapper>
</template>
<script>
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons-vue';
import { AuthWrapper } from './style';
import { reactive, ref } from 'vue';

const SignUp = {
  name: 'SignUp',
  components: { FacebookOutlined, TwitterOutlined, AuthWrapper },
  setup() {
    const values = ref(null);
    const checked = ref(null);
    const handleSubmit = value => {
      values.value = value;
    };

    const onChange = check => {
      checked.value = check;
    };
    const formState = reactive({
      name: '',
      username: '',
      email: '',
      password: '',
    });
    return {
      onChange,
      handleSubmit,
      formState,
    };
  },
};

export default SignUp;
</script>
