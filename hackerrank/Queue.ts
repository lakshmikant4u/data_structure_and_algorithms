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
            let node = this.head
            this.head = this.head.next;
            if (this.head == null) this.tail = null;
            return node;
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

    printQueue() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}


let queue = new Queue(); // { head : null, tail : null}
let obj1: TempNode = new TempNode(10);
queue.add(obj1); // let obj1:TempNode = {data : 10, next : null},  queue -> { head : obj1, tail : obj1}

let obj2: TempNode = new TempNode(20);
queue.add(obj2); //  let obj2:TempNode = {data : 20, next : null}, queue -> { head : obj1, tail : obj2}, obj1:TempNode = {data : 10, next : obj2},

let obj3: TempNode = new TempNode(30);
queue.add(obj3);// let obj3:TempNode = {data : 30, next : null}, queue -> {head : obj1 ,tail : obj3}, obj1:TempNode = {data:10 , next : obj2} 
//obj2 :TempNode ={data:20 , next:obj3}

queue.peek(); // return obj1
queue.remove(); // return obj1  queue -> {head : obj2 ,tail : obj3},

let obj4: TempNode = new TempNode(40);
queue.add(obj4); // let obj4:TempNode = {data : 40, next : null},  queue -> { head : obj2, tail : obj4}

queue.printQueue();

queue.remove();//return obj2 , queue -> {head : obj3 , tail : obj4}

queue.remove();//return obj3 , queue -> {head : obj4 , tail : obj4}

queue.remove();//return obj4 , queue -> {head : null , tail : null}

queue.remove();//return null  , queue -> {head : null , tail : null} //console.log(" empty queue " ) 

let obj5: TempNode = new TempNode(50);

queue.add(obj5); //queue -> {head : obj5, tail : obj5}




