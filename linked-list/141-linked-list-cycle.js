/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let quick = head
    let slow = head
    while (slow || quick) {
        slow = slow.next
        if (quick.next && quick.next.next) {
            quick = quick.next.next
        } else {
            return false
        }
        if (slow === quick) {
            return true
        }
    }
    return false
};

var hasCycle = function (head) {
    let quick = head
    let slow = head
    while (slow && quick && quick.next) {
        slow = slow.next
        quick = quick.next.next
        if (slow === quick) {
            return true
        }
    }
    return false
};