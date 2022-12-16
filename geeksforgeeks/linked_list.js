/**  This is Linked List with below operations
 * 1) Add Front
 * 2) Delete Front
 * 3) Add Rear
 * 4) Delete Read
 * 5) Print List Elements
*/

function Node(value) {
    this.data = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
    this.addFront = (data) => {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        return this.size++; // return new size of List
    }
    this.addRear = (data) => {
        let node = new Node(data);
        if (this.head == null) this.head = node;
        else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        return this.size++; // return new size of List
    }
    this.deleteFront = () => {
        let temp = this.head;
        if (this.head != null) {
            this.head = this.head.next;
        }
        return temp; // deleted item from linked list
    }
    this.deleteRear = () => {

        let temp = this.head;
        if (this.head && this.head.next == null) { this.head = null; return }

        let prev = null;
        while (temp && temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        if (prev != null) prev.next = null;
        return temp; // deleted item from linked list
    }
    this.printList = () => {
        let temp = this.head;
        let listOp = '';
        while (temp != null) {
            listOp += (`${temp.data} -> `);
            temp = temp.next;
        }
        listOp += 'null'
        console.log(listOp)
    }
}

let list = new LinkedList();
list.addFront(2);
list.addFront(3);
list.addFront(4);
list.addFront(5);
list.addRear(8);
list.printList();

list.deleteFront();
list.printList();

list.deleteRear();
list.printList();

