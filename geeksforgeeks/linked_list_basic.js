
let head; // head of the list

/* Linked list Node*/
function Node(val) {
    // Constructor to create a new node
    // Next is by default initialized as null

    this.data = val;
    this.next = null;

}
function printLinkeList(head) {
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }

}
function push(new_data, head) {

    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
    return head;
}

head = new Node(2); // 2 -> null

head.next = new Node(4); // 2(head) -> 4(node2) -> null

head.next.next = new Node(5); // 2(head) -> 4(node2) -> 5(node3) -> null

let temp = head;
// printLinkeList(temp);

let head2 = new Node(10);
let second2 = new Node(20);
let third2 = new Node(30);

head2.next = second2;
second2.next = third2;

let temp2 = head2;

printLinkeList(temp2);

let newHead = push(6, head2);

printLinkeList(newHead);


