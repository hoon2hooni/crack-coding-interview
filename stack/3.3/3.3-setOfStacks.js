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
      this.next = null;
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
    setNextStack(stack) {
      this.next = stack;
    }
  }

  class SetOfStacks {
    constructor(capacity) {
      this.capacity = capacity;
      this.topStack = null;
    }
    push(value) {
      if (!this.topStack) {
        const newStack = new Stack();
        newStack.push(value);
        this.topStack = newStack;
        return;
      }

      //capacity 같을 때
      if (this.topStack.size === this.capacity) {
        const newStack = new Stack();
        newStack.push(value);
        newStack.setNextStack(this.topStack);
        this.topStack = newStack;
        return;
      }

      //그냥 추가될 때
      this.topStack.push(value);
      //현재 스택 push(value)
    }
    pop() {
      if (!this.topStack) {
        throw new Error("안된다!");
      }

      const currentStack = this.topStack;
      const prevStack = this.topStack.next;
      if (currentStack.size === 1) {
        if (prevStack) {
          this.topStack = prevStack;
        } else {
          this.topStack = null;
        }
      }
      return currentStack.pop();
    }
  }

  const a = new SetOfStacks(3);
  a.push(1);
  a.push(1);
  a.push(1);
  a.push(1);
  console.log(a);
  console.log(a.pop());
  console.log(a.pop());
  console.log(a.pop());
  a.push(1);
  a.push(1);
  a.push(1);
  console.log(a.pop());
  console.log(a.pop());
  console.log(a.pop());
  console.log(a.pop());

  console.log(a);
}
