var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // var child = new Tree(5)
  // this.children.push(child);
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {

  var nonMatches = 0
  var matches = 0

  var searchChildren = function(tree){

  for (var i = 0; i < tree.children.length; i++){
    // console.log(tree.children[i].children[0].value);
    if (tree.children[i].value === target){
      matches ++
    } else {
      nonMatches++
    }
    searchChildren(tree.children[i])

  }
  }

  searchChildren(this)
  return (matches > 0)

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
