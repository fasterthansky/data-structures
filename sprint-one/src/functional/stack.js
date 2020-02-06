var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size(storage)] = value;
  };

  someInstance.pop = function() {
    var result = storage[someInstance.size(storage) - 1];
    delete storage[someInstance.size(storage) - 1];
    return result
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

