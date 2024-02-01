// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

function longestValidParentheses(s: string): number {
  const n: number = s.length;
  const stack = new Stack();
  stack.push(-1)
  let max: number = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length == 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack.peek().value);
      }
    }
  }

  return max;
};

class StackNode {
  next: StackNode | null;

  constructor(public value: any) {
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  bottom: StackNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): StackNode {
    return this.top!;
  }

  push(value: any) {
    let newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let hold = this.top;
      this.top = newNode;
      this.top.next = hold;
    }
    this.length++;
    return this.top;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const holding = this.top;
    this.top = this.top.next;
    this.length--;
    return holding;
  }
}

// test cases 
longestValidParentheses("(()")
longestValidParentheses(")()())")
longestValidParentheses("")
