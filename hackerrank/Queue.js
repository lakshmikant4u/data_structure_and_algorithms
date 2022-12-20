var TempNode = /** @class */ (function () {
    function TempNode(data) {
        this.data = data;
        this.next = null;
    }
    return TempNode;
}());
//  (head)10 -  29 - 33 - 44- 45(tail)
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
    }
    Queue.prototype.isEmpty = function () {
        this.head == null;
    };
    Queue.prototype.add = function (node) {
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head == null)
            this.head = node;
    };
    Queue.prototype.remove = function () {
        if (this.head == null) {
            console.log("Queue Empty");
            return null;
        }
        else {
            var node = this.head;
            this.head = this.head.next;
            if (this.head == null)
                this.tail = null;
            return node;
        }
    };
    Queue.prototype.peek = function () {
        if (this.head == null) {
            console.log("Queue Empty");
            return null;
        }
        else {
            return this.head;
        }
    };
    Queue.prototype.printQueue = function () {
        var temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    return Queue;
}());
var queue = new Queue(); // { head : null, tail : null}
var obj1 = new TempNode(10);
queue.add(obj1); // let obj1:TempNode = {data : 10, next : null},  queue -> { head : obj1, tail : obj1}
var obj2 = new TempNode(20);
queue.add(obj2); //  let obj2:TempNode = {data : 20, next : null}, queue -> { head : obj1, tail : obj2}, obj1:TempNode = {data : 10, next : obj2},
var obj3 = new TempNode(30);
queue.add(obj3); // let obj3:TempNode = {data : 30, next : null}, queue -> {head : obj1 ,tail : obj3}, obj1:TempNode = {data:10 , next : obj2} 
//obj2 :TempNode ={data:20 , next:obj3}
queue.peek(); // return obj1
queue.remove(); // return obj1  queue -> {head : obj2 ,tail : obj3},
var obj4 = new TempNode(40);
queue.add(obj4); // let obj4:TempNode = {data : 40, next : null},  queue -> { head : obj2, tail : obj4}
queue.printQueue();
queue.remove(); //return obj2 , queue -> {head : obj3 , tail : obj4}
queue.remove(); //return obj3 , queue -> {head : obj4 , tail : obj4}
queue.remove(); //return obj4 , queue -> {head : null , tail : null}
queue.remove(); //return null  , queue -> {head : null , tail : null} //console.log(" empty queue " ) 
var obj5 = new TempNode(50);
queue.add(obj5); //queue -> {head : obj5, tail : obj5}
