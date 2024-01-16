// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {

  let res: ListNode | null = new ListNode();
  if (!l1 && !l2) {
    carry > 0 ? res.val = carry : res = null;
    return res;
  }

  let add = (l1?.val || 0) + (l2?.val || 0) + carry;
  res.val = add % 10;
  carry = Math.floor(add / 10)
  res.next = addTwoNumbers(l1?.next || null, l2?.next || null, carry)
  return res;
};

// creating Link list for test case
const createLinkList = (nums: number[]): ListNode => {
  let parent = new ListNode(nums[0])
  let current = parent;
  for (let index = 1; index < nums.length; index++) {
    current.next = new ListNode(nums[index]);
    current = current.next
  }
  return parent;
}
let l1 = createLinkList([2,4,3]);
let l2 = createLinkList([5,6,4]);

console.log(addTwoNumbers(l1, l2))

l1 = createLinkList([0]);
l2 = createLinkList([0]);

console.log(addTwoNumbers(l1, l2))

