/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let p = head
    let q = head
    let i = 1
    while (p) {
        if (i > k) {
            q = q.next
        }
        p = p.next
        i++
    }
    return i < k ? null : q
};