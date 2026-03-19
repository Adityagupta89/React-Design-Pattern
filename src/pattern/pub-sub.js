export default class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(eventName, listener) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }

    this.listeners.get(eventName).push(listener);

    return {
      off: () => {
        const listeners = this.listeners.get(eventName);
        if (!listeners) return;

        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }

        if (listeners.length === 0) {
          this.listeners.delete(eventName);
        }
      },
    };
  }

  emit(eventName, ...args) {
    const listeners = this.listeners.get(eventName);
    if (!listeners) return false;

    [...listeners].forEach((cb) => cb(...args));
    return true;
  }
}
