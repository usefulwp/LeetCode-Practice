
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function reverseList(head: ListNode | null): ListNode | null {
    if(!head||!head.next)return head;
    let prev:ListNode|null=null,curr:ListNode|null=head;
    while(curr){
        let newNext=curr.next;
        curr.next=prev;
        prev=curr;
        curr=newNext;
    }
    return prev;
};