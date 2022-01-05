{
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    constructor() {
      this.top = null;
    }
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
    pop() {
      if (!this.top) {
        throw new Error("this is an empty stack");
      }
      const temp = this.top;
      this.top = this.top.next;
      return temp.value;
    }
    peek() {
      if (!this.top) {
        throw new Error("this is an empty stack");
      }

      return this.top.value;
    }
  }

  class MinStack extends Stack {
    constructor() {
      super();
      this.s2 = new Stack();
    }
    push(value) {
      if (value <= this.min()) {
        this.s2.push(value);
      }
      super.push(value);
    }
    pop(value) {
      if (value === this.min()) {
        this.s2.pop();
      }
      super.pop();
    }
    min() {
      if (this.top === null) {
        return 1000000000;
      }
      return this.s2.peek();
    }
  }

  const minStack = new MinStack();
  minStack.push(4);
  minStack.push(3);
  minStack.push(5);
  minStack.push(6);
  console.log(minStack.min());
  console.log(minStack.s2);
}
