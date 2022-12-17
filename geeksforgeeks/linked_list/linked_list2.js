function Node(value) {
    this.data = value;
    this.next = null;
}

let head = null;

function pushToLinkListFront(data_value) {
    let tempNode = new Node(data_value);
    tempNode.next = head;
    head = tempNode;
}

function prindNodeList() {
    let temp = head;
    while (temp != null) {
        console.log(temp.data, ' -> ')
        temp = temp.next;
    }
}

function insertPos(position, data) {
    if (position < 1)
        console.log("Invalid position");
    if (position == 1) {
        pushToLinkListFront(data);
    }
    else {
        let temp = head;
        while (position != 0) {
            if (position == 1) {
                let tempNode = new Node(data);
                tempNode.next = temp;
                temp = tempNode;
                break;
            }
            position--;
            temp = temp.next;
        }
        if (position != 1)
            console.log("Position out of range");
    }
}
prindNodeList(); // 
pushToLinkListFront(23)
// prindNodeList(); // 23 -> 
pushToLinkListFront(20)
// prindNodeList(); // 23 -> 20 -> 
insertPos(2, 25)
insertPos(2, 28)
prindNodeList();





