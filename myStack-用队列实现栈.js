/*
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空

注意:
你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-stack-using-queues
*/

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queueOne = [];
  this.queueTwo = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queueOne.length > 0 ? this.queueOne.push(x) : this.queueTwo.push(x);  
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if(this.queueOne.length > 0) {
    while(this.queueOne.length > 1) {
      this.queueTwo.push(this.queueOne.shift());
    }

    return this.queueOne.shift();
  }
  else if(this.queueTwo.length > 0) {
    while(this.queueTwo.length > 1) {
      this.queueOne.push(this.queueTwo.shift());
    }

    return this.queueTwo.shift();
  }
  else {
    return null;
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  let res = this.pop();
  this.push(res);
  return res;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queueOne.length <= 0 && this.queueTwo.length <= 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let obj = new MyStack();

obj.push(1);

console.log(obj.top());

console.log(obj);

console.log(obj.pop());

// obj.push(2);
// obj.push(3);
// obj.push(4);
// obj.push(5);


console.log(obj);

console.log(obj.empty());
