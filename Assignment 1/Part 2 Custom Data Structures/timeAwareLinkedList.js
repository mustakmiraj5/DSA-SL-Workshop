/**
 * to build a custom linked list which will keep track of the creation time we just have to store the timestamp also in every node. we can use this timestamp to see when the node was created, most recent nodes like a history.
 */
class Node{
    constructor(value){
        this.value = value;
        this.timeStamp = Date.now();        // keeping the timestamp when created. constant time operation
        this.next = null;
    }
}

class TimeAwareLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;          // constructor will take constant time
    }

    append(value){
        const newNode = new Node(value);        // creating a new node and assign. 2 operations
        this.size++;                // increase size and assign. 2 operations

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;        // if there is no head then the new node is both head and tail. constant operation
            return;
        }

        this.tail.next = newNode;       // 1 operation
        this.tail = newNode;        // 1 operation
    }

    /**
     * a method to get recently added nodes. here seconds is parameter taken how far i want to look back for nodes.
     * set the timestamp to that much second back and take that as a time limit of past.
     * if any node has timestamp greater than that time limit then it is a recent node.
     */
    getRecentInserted(seconds){
        const recent = Date.now() - seconds * 1000;     // 4 operations. constant time
        let current = this.head;            // 1 operation
        let result = 'Recently inserted: ';     // to store the result. 1 operation, constant time.

        while(current){
            if(current.timeStamp >= recent){        // iterate through all nodes to find the recent. O(n) time complexity
                result += current.value + ' ' + `[${this.formatDate(current.timeStamp)}]` + ' -> ';  // add the formatted resukt
            }
            current = current.next;     // 1 operation
        }
        result += 'null';    // 1 operation
        return result;        // 1 operation
    }



    // a helper method to show the timestamp in a readable format
    formatDate(date){
        const time = new Date(date);
        const formattedTime = time.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          });
        return formattedTime;
    }
    // for understandable output
    toString(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.value + ' ' + `[${this.formatDate(current.timeStamp)}]` + ' -> ';
            current = current.next;
        }
        result += 'null';
        return result;
    }
}

const list = new TimeAwareLinkedList();
list.append(15);
list.append(2);
list.append(92);
list.append(51);
list.append(34);

console.log(list.toString());

/**
 * to understand the difference in insert time we had to use setTimeout to delay the code execution
 */

const list2 = new TimeAwareLinkedList();
list2.append(22);

setTimeout(() => {
    list2.append(18);
}, 2000);

setTimeout(() => {
    list2.append(76);
}, 4000);

setTimeout(() => {
    list2.append(30);
}, 6000);

setTimeout(() => {
    console.log(list2.toString());
}, 8000);

setTimeout(() => {
    console.log(list2.getRecentInserted(6));
}, 9000);