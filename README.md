# BinaryTree
Implement a binary tree

Each tree has some nodes and every node has to side(left and right)

Each tree also has a root that is extend above the other nodes.

For example this is a tree with 7 nodes:
```Numbers = [10, 3, 6, 15, 25, 1, 20]```
```js
Tree: {
  value: 10,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  },
  right: {
    value: 20,
    left: {
      value: 15,
      left: null,
      right: null
    },
    right: {
      value: 25,
      left: null,
      right: null
    }
  }
}
```
First number is root ```root = 10```

If next number less than root stay in left otherwise stay in right

```3``` is less than ```10``` so stay in left of ```10```

```6``` is less than ```10``` so stay in left but ```6``` more than ```3``` so stay in right of ```3```

```15``` is more than ```10``` so stay in right of ```10``` 

...

For binary search start from the tree's root(10) and if your number is less than node go to left side
otherwise go to right side.


