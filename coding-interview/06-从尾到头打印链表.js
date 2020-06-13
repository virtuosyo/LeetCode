/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let p = head
    const result = []
    while (p) {
        result.push(p.val)
        p = p.next
    }
    return result.reverse()
};