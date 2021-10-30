import app from '../../config/configApp';
import mitt from 'mitt';
const emitter = mitt();

app.config.globalProperties.emitter = emitter;
