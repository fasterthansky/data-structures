var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    // var newHead = list.head.next;
    var result = list.head.value;
    // delete list.head;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
      };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
