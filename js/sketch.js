let tree
let container = []

function setup() {
    tree = new Tree()
    for (let i = 0; i < 100; i++) {
        tree.addValue(floor(random(0, 100)))
    }
    tree.traverse()
    let number = floor(random(0, 100))
    console.log('Number: ' + number)
    tree.search(number)
    console.log(container)
}

// ----------Tree----------
// Create
class Tree {
    constructor() {
        this.root = null
    }
}

// Add value 
Tree.prototype.addValue = function (value) {
    let node = new Node(value)
    if (this.root === null) {
        this.root = node
    } else {
        this.root.addNode(node)
    }
}
// Traverse
Tree.prototype.traverse = function () {
    this.root.visit()
}
// Search
Tree.prototype.search = function (value) {
    let found = this.root.search(value)
    if (found != null) {
        console.log('Found')
    } else if (found == null) {
        console.log('Not Found')
    }
}

// ----------Node----------
// Create
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// Add Node
Node.prototype.addNode = function (node) {
    if (node.value < this.value) {
        if (this.left === null) {
            this.left = node
        } else {
            this.left.addNode(node)
        }
    } else if (node.value > this.value) {
        if (this.right === null) {
            this.right = node
        } else {
            this.right.addNode(node)
        }
    }
}
// Visit
Node.prototype.visit = function () {
    if (this.left !== null) {
        this.left.visit()
    }
    container.push(this.value)
    if (this.right !== null) {
        this.right.visit()
    }
}
// Search 
Node.prototype.search = function (value) {
    if (value == this.value) {
        return value
    } else if (value < this.value && this.left != null) {
        return this.left.search(value)
    } else if (value > this.value && this.right != null) {
        return this.right.search(value)
    }
    return null
}