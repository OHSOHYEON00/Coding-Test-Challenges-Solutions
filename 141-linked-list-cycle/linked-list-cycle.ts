/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {

    const read = new Set<ListNode>();
    let pointer = head;

    if (!pointer) return false;

    while(pointer) {
        if (!read.has(pointer)) {
            read.add(pointer);
            pointer = pointer.next;
        } else {
            return true;
        }
    }

    return false;
};