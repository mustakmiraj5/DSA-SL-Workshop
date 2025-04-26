// Delete a node from a singly linked list by value.

class Node{
    constructor(value){     // constant time operation
        this.value = value;     // single operation
        this.next = null;       // single operation
    }
}

class LinkedList{
    constructor(){
        this.head = null;       // single operation. constant time
    }

    append(value){
        const newNode = new Node(value);        // create new node and assign. constant time operation

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    deleteByValue(value){
        if(!this.head){
            return;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        while(curr.next && curr.next.value !== value){
            curr = curr.next;
        }
        if(curr.next){
            curr.next = curr.next.next;
        }

        /**
         * Time complexity: O(n). in best case if the value is in head then it will be O(1).
         * otherwise we have to check through all nodes to find our desired value.
         */
    }
    // for understandable output
    toString(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.value + ' -> ';
            current = current.next;
        }
        result += 'null';
        return result;
    }
}

const list = new LinkedList();
list.append(11);
list.append(91);
list.append(77);
list.append(28);
list.append(48);

console.log(list.toString());

list.deleteByValue(28);

console.log(list.toString());

list.deleteByValue(11);

console.log(list.toString());