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
var deleteNode = function (head, val) {
    let p1 = head
    let p2 = head.next
    while (p1 && p2) {
        if (p1.val === val) {
            return p2
        } else if (p2.val === val) {
            p1.next = p2.next
            return head
        }
        p1 = p1.next
        p2 = p2.next
    }
};