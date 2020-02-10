

// Instantiate a new graph
var Graph = function() {
  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = new Node(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (this.storage[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var keys = [];

  for (var key in this.storage[node]) {
    if (key !== 'value'){
      keys.push(key)
    }
  }
  for (var i = 0; i < keys.length; i++) {

    console.log(this.storage[keys[i]]);
    delete this.storage[keys[i]][node];
  }


  delete this.storage[node];
};

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.storage[fromNode][toNode]) {
      return true;
    } else {
      return false;
    }

  };

  // Connects two nodes in a graph by adding an edge between them.
  Graph.prototype.addEdge = function(fromNode, toNode) {
    // this.storage[toNode][fromNode] = this.storage[toNode];
    // this.storage[toNode][fromNode] = this.storage[fromNode];
    // debugger;
    // this.storage[fromNode][toNode] = this.storage[fromNode];
    // this.storage[toNode];

    this.storage[toNode][fromNode] = this.storage[fromNode];
    this.storage[fromNode][toNode] = this.storage[toNode];
  };

  // Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromNode, toNode) {
    delete this.storage[toNode][fromNode];
    delete this.storage[fromNode][toNode];

  };

  // Pass in a callback which will be executed on each node of the graph.
  Graph.prototype.forEachNode = function(cb) {
    for (var key in this.storage) {
      cb(key);
    }
  };

  /*
   * Complexity: What is the time complexity of the above functions?
   */


  var Node = function(value) {
    var node = {};
    this.value = value;
  };

/*
 * Complexity: What is the time complexity of the above functions?
 */


