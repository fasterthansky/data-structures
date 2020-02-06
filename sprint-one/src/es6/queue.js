class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.front = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  dequeue() {
    if (this.front < this.count) {
      var result = this.storage[this.front];
      this.front++;
      return result;
    }
    return 0;
  };

  size() {
    return this.count - this.front;
  };
}
