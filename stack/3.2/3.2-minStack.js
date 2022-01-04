class NodeWithMin {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.min = value;
  }
  compareMins(peekMin) {
    if (peekMin < this.min) {
      this.min = peekMin;
      return;
    }
  }
}
class MinStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new NodeWithMin(value);
    if (!this.top) {
      this.top = newNode;
      return;
    }
    newNode.compareMins(this.top.min);
    newNode.next = this.top;
    this.top = newNode;
  }

  min() {
    return this.top.min;
  }

  pop() {
    if (!this.top) {
      throw new Error("this stack is Empty");
    }
    const temp = this.top;
    this.top = this.top.next;
    return temp.value;
  }
}

const aMinStack = new MinStack();
aMinStack.push(3);
aMinStack.push(4);
aMinStack.push(2);
aMinStack.push(6);
aMinStack.push(10);

console.log(aMinStack.pop());
console.log(aMinStack.min());
console.log(aMinStack.pop());
console.log(aMinStack.min());
console.log(aMinStack.pop());
console.log(aMinStack.min());
console.log(aMinStack.pop());
console.log(aMinStack.min());
