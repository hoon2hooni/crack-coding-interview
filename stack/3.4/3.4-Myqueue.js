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
      this.size = 0;
    }
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
    pop() {
      if (!this.top) {
        return;
      }
      const temp = this.top;
      this.top = this.top.next;
      this.size--;
      return temp.value;
    }
    peek() {
      if (!this.top) {
        throw new Error("this is an empty stack");
      }
      return this.top.value;
    }

    isEmpty() {
      return !this.top;
    }
  }
  //스택 두개로 큐 하나를 구현한 MyQueue클래스를 구현해라

  class MyQueue {
    constructor() {
      this.stackNewest = new Stack();
      this.stackOldest = new Stack();
    }

    enqueue(value) {
      this.stackNewest.push(value);
    }

    shiftStacks() {
      if (!this.stackNewest.isEmpty()) {
        while (!this.stackNewest.isEmpty()) {
          this.stackOldest.push(this.stackNewest.pop());
        }
      }
    }
    dequeue() {
      this.shiftStacks();
      return this.stackOldest.pop();
    }
  }

  const queue = new MyQueue();
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}
