import app from '../../config/configApp';
import mitt from 'mitt';
import { VueMasonryPlugin } from 'vue-masonry/src/masonry-vue3.plugin';
const emitter = mitt();

app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);
