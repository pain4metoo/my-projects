class Signal<ListenerType> {
  private listeners: Array<(params: ListenerType) => void>;

  constructor() {
    this.listeners = [];
  }

  public add(listener: (params: ListenerType) => void): void {
    this.listeners.push(listener);
  }

  public remove(listener: (params: ListenerType) => void): void {
    this.listeners = this.listeners.filter(elem => elem !== listener);
    console.log(this.listeners);
  }

  public emit(params: ListenerType): void {
    this.listeners.forEach(listener => listener(params));
  }
}
export default Signal;
