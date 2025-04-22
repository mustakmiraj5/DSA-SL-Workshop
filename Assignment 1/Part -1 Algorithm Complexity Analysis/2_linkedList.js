// Insert at the end of a linked list.

class Node{
    constructor(value){  // const O(1) for constructor
        this.value = value;  // 1 operation
        this.next = null;   // 1 operation
    }
}

class LinkedList{
    constructor(){          // consttant time for constructor
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        this.size++;

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode; // i know the tail. so adding value next to tail
        this.tail = newNode;    // making the new node tail to keep track of the tail

        // Here inserting value at the end of the linked list taking O(1) because of the memory trade off of tail, O(1) space complexity. 
        
    }
}

const list1 = new LinkedList();
list1.append(10);
list1.append(20);
list1.append(30);
list1.append(40);
list1.append(50);

console.log(list1);
