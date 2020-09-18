/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let current = new ListNode();
    const arrow = current;

    while (l1 || l2) {
        if (!l1) {
            current.next = l2;
            return arrow.next;
        } else if (!l2) {
            current.next = l1;
            return arrow.next;
        }

        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    return arrow.next;
};