/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

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
 * @return {ListNode}
 */

// 利用函数调用栈逆序
var reverseList1 = function(head) {
  if(!head || !head.next) {
    return head;
  }
  let res = reverseList1(head.next);

  head.next.next = head;
  head.next = null;

  return res;
};

// 利用三个指针循环
var reverseList2 = function(head) {
  let fast = head, slow = null;

  while(fast) {
    head = fast.next;

    fast.next = slow;
    slow = fast;
    fast = head
  }

  return slow;
}

let link = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

let result = reverseList3(link)

console.log(JSON.stringify(result));