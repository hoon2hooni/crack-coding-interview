{
  class SetOfStack {
    constructor(capacity) {
      this.stacks = [];
      this.capacity = capacity;
    }

    push(value) {
      const last = this.stacks[this.stacks.length - 1];
      if (last && last.length < this.capacity) {
        last.push(value);
      } else {
        this.stacks.push([value]);
      }
    }

    pop() {
      const last = this.stacks[this.stacks.length - 1];
      if (!last) {
        throw new Error(
          "This Stack is already empty  \n please push value at first"
        );
      }
      const value = last.pop();
      if (!last.length) {
        this.stacks.pop();
      }
      return value;
    }
  }

  const ans = new SetOfStack(3);
  ans.push(3);
  console.log(ans);
  ans.push(4);
  console.log(ans);
  ans.push(5);
  console.log(ans);
  ans.push(7);
  console.log(ans);
  ans.push(9);
  console.log(ans);
  ans.pop();
  console.log(ans);
  ans.pop();
  console.log(ans);
  ans.pop();
  console.log(ans);
  ans.pop();
  ans.pop();
  ans.pop();
  ans.pop();
  ans.pop();
  ans.pop();
}
