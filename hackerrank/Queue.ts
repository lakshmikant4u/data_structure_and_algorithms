class TempNode {
    data: any;
    next: TempNode | null;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


//  (head)10 -  29 - 33 - 44- 45(tail)
class Queue {
    head: TempNode | null;
    tail: TempNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        this.head == null;
    }
    add(node: TempNode) {
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head == null) this.head = node;
    }
    remove() {
        if (this.head == null) {
            console.log("Queue Empty");
            return null;
        } else {
            let data = this.head
            this.head = this.head.next;
            if (this.head == null) this.tail = null;
            return data;
        }
    }
    peek() {
        if (this.head == null) {
            console.log("Queue Empty");
            return null;
        } else {
            return this.head;
        }
    }
}


let queue = new Queue(); // { head : null, tail : null}
let obj1: TempNode = new TempNode(10);
queue.add(obj1); // let obj1:TempNode = {data : 10, next : null},  queue -> { head : obj1, tail : obj1}

let obj2: TempNode = new TempNode(20);
queue.add(obj2); //  let obj2:TempNode = {data : 20, next : null}, queue -> { head : obj1, tail : obj2}, obj1:TempNode = {data : 10, next : obj2},

