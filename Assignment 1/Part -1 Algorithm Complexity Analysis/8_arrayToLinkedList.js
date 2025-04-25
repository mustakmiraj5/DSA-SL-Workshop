// Convert an array into a linked list.
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    convertToLinkedList(arr){
        if(arr.length === 0){
            return null;
        }

        this.head = new Node(arr[0]);
        let current = this.head;

        for(let i = 1; i<arr.length; i++){
            current.next = new Node(arr[i]);
            current = current.next;
        }
    }

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
list.convertToLinkedList([1,2,3,4,5,6,7,8,9,10]);
console.log(list.toString());

const list2 = new LinkedList();
list2.convertToLinkedList([]);
console.log(list2.toString());