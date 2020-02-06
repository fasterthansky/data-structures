var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.front = 0;

};


  Queue.prototype.enqueue = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  Queue.prototype.dequeue = function () {
    if (this.front < this.count) {
      var result = this.storage[this.front];
      this.front++;
      return result;
    }
    return 0;
  };

  Queue.prototype.size = function () {
    return this.count - this.front;
  };



