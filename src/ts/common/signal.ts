class Signal<ListenerType> {
  public listeners: Array<(params: ListenerType) => void>;

  constructor() {
    this.listeners = [];
  }

  public add(listener: (params: ListenerType) => void): void {
    this.listeners.push(listener);
  }

  public remove(listener: (params: ListenerType) => void): void {
    this.listeners = this.listeners.filter((elem) => elem !== listener);
  }

  public emit(params: ListenerType): void {
    this.listeners.forEach((listener) => listener(params));
  }
}
export default Signal;
