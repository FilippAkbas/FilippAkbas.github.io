<script>
import { ListStyle } from './style';
import VueTypes from 'vue-types';

export default {
  name: 'List',
  props: {
    text: VueTypes.oneOfType([VueTypes.string, VueTypes.object, VueTypes.node]),
  },
  components: {
    ListStyle,
  },
  render() {
    return (
      <ListStyle class="list-single">
        <span class="icon">
          <sdFeatherIcons type="check" size="14" />
        </span>
        <span>{this.text}</span>
      </ListStyle>
    );
  },
};
</script>
