<template>
  <a-input
    :name="`titile-edit${boardId}`"
    class="title-edit"
    placeholder="Enter Title"
    @blur="() => onBlur(boardId)"
    @pressEnter="() => onBlur(boardId)"
    v-model:value="value"
  />
</template>
<script>
import { ref } from 'vue';
import propTypes from 'vue-types';
export default {
  name: 'BoardTitleUpdate',
  props: {
    boardTitle: propTypes.string,
    boardId: propTypes.string,
    onBlur: propTypes.func,
  },
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
