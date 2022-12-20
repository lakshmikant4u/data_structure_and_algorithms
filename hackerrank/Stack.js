var StackNode = /** @class */ (function () {
    function StackNode(data) {
        this.data = data;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
    }
    Stack.prototype.isEmpty = function () {
        this.top == null;
    };
    Stack.prototype.peek = function () {
        if (this.top == null) {
            console.log("Stack is Empty");
            return null;
        }
        else {
            return this.top;
        }
    };
    Stack.prototype.push = function (node) {
        node.next = this.top;
        this.top = node;
    };
    Stack.prototype.pop = function () {
        if (this.top == null) {
            console.log("Stck is Empty");
            return null;
        }
        else {
            var node = this.top;
            this.top = this.top.next;
            return node;
        }
    };
    Stack.prototype.printStack = function () {
        var temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    return Stack;
}());
var stack1 = new Stack();
var obj12 = new StackNode(11);
var obj13 = new StackNode(12);
var obj14 = new StackNode(13);
var obj15 = new StackNode(14);
stack1.push(obj12);
stack1.push(obj13);
stack1.push(obj14);
stack1.push(obj15);
//stack 14,13,12,11 
stack1.printStack();
