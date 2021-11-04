<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="darkMode ? 'dark' : 'light'"
  >
    <a-sub-menu key="dashboard">
      <template v-slot:title><sdFeatherIcons type="home" /><span>Dashboard</span></template>
      <a-menu-item @click="toggleCollapsed" key="home">
        <router-link to="/">
          Social Media
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="business">
        <router-link to="/business">
          Fintech / Business
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="performance">
        <router-link to="/performance">
          Site Performance
        </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item @click="toggleCollapsed" key="editprofile">
      <router-link to="/edit-profile">
        <sdFeatherIcons type="user" />
        <span>
          Edit Profile
        </span>
      </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="accountsettings">
      <router-link to="/accountsettings">
        <sdFeatherIcons type="settings" />
        <span>
          Account Settings
        </span>
      </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="changepassword">
      <router-link to="/changepassword">
        <sdFeatherIcons type="key" />
        <span>
          Change Password
        </span>
      </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="socialprofile">
      <router-link to="/socialprofile">
        <sdFeatherIcons type="users" />
        <span>
          Social Profile
        </span>
      </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="notification">
      <router-link to="/notification">
        <sdFeatherIcons type="bell" />
        <span>
          Notification
        </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { computed, reactive, ref, toRefs, watch, watchEffect } from 'vue';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import versions from '../demoData/changelog.json';

export default {
  name: 'AsideItems',
  props: {
    toggleCollapsed: VueTypes.func,
    events: VueTypes.object,
  },
  setup(props) {
    const store = useStore();
    const darkMode = computed(() => store.state.themeLayout.data);
    const mode = ref('inline');
    const { events } = toRefs(props);
    const {
      onRtlChange,
      onLtrChange,
      modeChangeDark,
      modeChangeLight,
      modeChangeTopNav,
      modeChangeSideNav,
    } = events.value;

    const router = computed(() => useRoute());
    const state = reactive({
      selectedKeys: ['home'],
      openKeys: ['dashboard'],
      preOpenKeys: ['dashboard'],
    });

    watchEffect(() => {
      if (router.value.matched.length) {
        if (router.value.matched.length > 2) {
          state.selectedKeys = [router.value.matched[2].name];
          state.openKeys = [router.value.matched[1].name];
          state.preOpenKeys = [router.value.matched[1].name];
        } else if (router.value.matched.length > 3) {
          state.selectedKeys = [router.value.matched[3].name];
          state.openKeys = [router.value.matched[1].name];
          state.preOpenKeys = [router.value.matched[1].name];
        } else {
          state.selectedKeys = [router.value.matched[1].name];
          state.openKeys = [router.value.matched[1].name];
          state.preOpenKeys = [router.value.matched[1].name];
        }
      }
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );

    return {
      mode,
      ...toRefs(state),
      darkMode,
      onRtlChange,
      onLtrChange,
      modeChangeDark,
      modeChangeLight,
      modeChangeTopNav,
      modeChangeSideNav,
      versions,
    };
  },
};
</script>
