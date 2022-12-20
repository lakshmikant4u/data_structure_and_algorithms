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
}
