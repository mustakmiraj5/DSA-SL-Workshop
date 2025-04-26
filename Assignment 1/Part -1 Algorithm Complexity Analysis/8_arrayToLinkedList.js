// Convert an array into a linked list.
/**
 * to convert an array into linked list we have to got through all the elements of the array and create node and connect them. this will take O(n) time complexity.
 */
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
            return null;        // if nothing is provided then return null. constant time operation
        }

        this.head = new Node(arr[0]); // the initial value will be the head. constant operation
        let current = this.head;        // 1 constant operation

        for(let i = 1; i<arr.length; i++){
            current.next = new Node(arr[i]);        // O(n) time complexity
            current = current.next;
        }
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
list.convertToLinkedList([1,2,3,4,5,6,7,8,9,10]);
console.log(list.toString());

const list2 = new LinkedList();
list2.convertToLinkedList([]);
console.log(list2.toString());