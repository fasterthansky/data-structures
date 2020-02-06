var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.count = 0;
  newInstance.front = 0;
  newInstance.storage = {};

  return newInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function () {
    if (this.front < this.count) {
      var result = this.storage[this.front];
      this.front++;
      return result;
    }
    return 0;
  },
  size: function () {
    return this.count - this.front;
  }
};


