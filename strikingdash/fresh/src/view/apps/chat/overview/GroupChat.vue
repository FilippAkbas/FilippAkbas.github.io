<template>
  <ChatWrapper>
    <div class="create-action">
      <sdButton class="btn-add" size="default" type="default" shape="circle" block>
        <sdFeatherIcons type="edit" size="14" />
        Create New Group
      </sdButton>
    </div>
    <ul v-if="chatData">
      <li v-for="({ groupName, content, id, img }, key) in chatData" :key="key + 1" class="chat-link-signle">
        <router-link @click="e => dataFiltering(e, id)" :to="id">
          <div class="author-figure">
            <img :src="require(`../../../../static/img/chat-author/${img}`)" alt="" />
          </div>

          <div class="author-info">
            <BlockSpan class="author-name">{{ groupName }}</BlockSpan>
            <BlockSpan class="author-chatText">
              {{ textRefactor(content[content.length - 1].content, 5) }}
            </BlockSpan>
          </div>
          <div class="author-chatMeta">
            <BlockSpan>{{
              moment(content[content.length - 1].time).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')
                ? moment(id).format('hh:mm A')
                : moment(id).format('dddd')
            }}</BlockSpan>
            <a-badge v-if="key <= 1" class="badge-success" :count="3" />
          </div>
        </router-link>
      </li>
    </ul>
  </ChatWrapper>
</template>
<script>
import moment from 'moment';
import { BlockSpan, ChatWrapper } from '../style';
import { textRefactor } from '../../../../components/utilities/utilities';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const GroupChat = {
  name: 'GroupChat',
  components: { BlockSpan, ChatWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const match = computed(() => useRoute());
    const chatData = computed(() =>
      state.chat.groupChat.data.sort((a, b) => {
        return b.time - a.time;
      }),
    );
    const dataFiltering = (e, id) => {
      e.preventDefault();
      dispatch('filterSinglepageGroup', id);
    };

    return {
      match,
      chatData,
      dataFiltering,
      moment,
      textRefactor,
    };
  },
};

export default GroupChat;
</script>
