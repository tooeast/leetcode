/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let left = head;
  function treverse(right) {
    if(!right) return true;

    let res = treverse(right.next);

    res = res && (right.val == left.val);
    left = left.next;
    return res;
  }

  return treverse(head)
};

let linkList = {
  val: 1,
  next: null
}
console.log(isPalindrome(linkList))

let linkList2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 1,
      next: null
    }
  }
}
console.log(isPalindrome(linkList2))

let linkList3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
console.log(isPalindrome(linkList3))

// 利用函数调用栈来逆序遍历链表，和正序做对比