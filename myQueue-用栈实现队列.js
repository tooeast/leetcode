/*
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例:
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明:
你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stackOne = [];
  this.stackTwo = [];
};

/*
最少需要两个栈来实现队列。因为先进先出。所以必须要有把一个栈倒置到来一个栈中来实现先进先出。
所以有两种方法：push 的时候倒，pop 的时候倒
本次使用的是 pop 的时候倒。但是我认为 push 的时候倒更好。因为 peek 更方便。
*/

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackOne.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this.stackOne.length <= 1) {
    return this.stackOne.pop();
  }

  while(this.stackOne.length > 1) {
    this.stackTwo.push(this.stackOne.pop());
  }

  let res = this.stackOne.pop();

  while(this.stackTwo.length > 0) {
    this.stackOne.push(this.stackTwo.pop());
  }

  return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.stackOne.length < 1) {
    return null;
  }

  while(this.stackOne.length > 1) {
    this.stackTwo.push(this.stackOne.pop());
  }

  let res = this.stackOne.pop();

  this.stackOne.push(res);

  while(this.stackTwo.length > 0) {
    this.stackOne.push(this.stackTwo.pop());
  }

  return res;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackOne.length <= 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let obj = new MyQueue();

console.log(obj);

obj.push(1);
console.log(obj);

obj.push(2);
obj.push(3);
console.log(obj);

console.log(obj.pop());
console.log(obj);

console.log(obj.pop());
console.log(obj.pop());
console.log(obj);

console.log(obj.empty());



