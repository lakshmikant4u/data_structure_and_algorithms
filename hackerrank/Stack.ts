class StackNode {
    data: any;
    next: StackNode | null;
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class Stack {
    top: StackNode | null;
    constructor() {
        this.top = null;
    }
    isEmpty() {
        this.top == null;
    }
    peek() {
        if (this.top == null) {
            console.log("Stack is Empty");
            return null;
        } else {
            return this.top;
        }
    }

    push(node: StackNode) {
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (this.top == null) {
            console.log("Stck is Empty");
            return null;
        } else {
            let node = this.top
            this.top = this.top.next;
            return node;
        }
    }
    printStack() {
        let temp = this.top;
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next;
        }
    }
}

let stack1 = new Stack();
let obj12: StackNode = new StackNode(11);
let obj13: StackNode = new StackNode(12);
let obj14: StackNode = new StackNode(13);
let obj15: StackNode = new StackNode(14);


stack1.push(obj12);
stack1.push(obj13);
stack1.push(obj14);
stack1.push(obj15);

//stack 14,13,12,11 

stack1.printStack();