export default class MyQueue {
  constructor() {
    this.eStack = [];
    this.dStack = [];
  }

  enqueue(value) {
    this.eStack.push(value);
    return this;
  }

  dequeue() {
    if (this.dStack.length === 0 && this.eStack.length === 0) {
      throw new Error('Queue is empty');
    }
    if (this.dStack.length === 0) {
      while (this.eStack.length > 0) {
        this.dStack.push(this.eStack.pop());
      }
    }
    return this.dStack.pop();
  }
};
