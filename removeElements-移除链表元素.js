/*
删除链表中等于给定值 val 的所有节点。

示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while(head && head.val == val) {
    head = head.next;
  }

  if(!head) {
    return null;
  }

  let res = head;

  while(1) {
    if(head.next && head.next.val == val) {

      if(head.next.next) {
        head.next = head.next.next;
      }
      else {
        head.next = null;
      }
    }
    else {
      head = head.next;
    }

    if(!head || !head.next) {
      break;
    }

  }

  return res;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function showNodes(head) {
  let res = '';

  if(!head) {
    return null;
  }

  while (1) {
    res += head.val;

    if(!head.next) {
      break;
    }

    res += ' -> ';
    head = head.next;
  }

  return res;
}

let head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
// head.next.next.next.next = new ListNode(4)
// head.next.next.next.next.next = new ListNode(5)
// head.next.next.next.next.next.next = new ListNode(6)

const val = 2;
console.log(showNodes(head));

let res = removeElements(head, val);

console.log(showNodes(res));
