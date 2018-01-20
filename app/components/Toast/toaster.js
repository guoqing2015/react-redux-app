import EventManager from './util/EventManager';
import { SHOW_TOAST, HIDE_TOAST } from './constant';


function emitEvent(content, options) {
    EventManager.emit(SHOW_TOAST, content, options);
}


let toaster = Object.assign(
    (content, options) => emitEvent(content, (options)),
    {
      success: (content, options) => emitEvent(content, Object.assign({}, options, { type: 'success' })),
      info: (content, options) => emitEvent(content, Object.assign({}, options, { type: 'info' })),
      warn: (content, options) => emitEvent(content, Object.assign({}, options, { type: 'warn' })),
      error: (content, options) => emitEvent(content, Object.assign({}, options, { type: 'error' })),
      hide: () => EventManager.emit(HIDE_TOAST)
    }
  )



export default toaster;

