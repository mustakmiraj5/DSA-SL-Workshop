class Node{
    constructor(value){
        this.value = value;
        this.timeStamp = Date.now();
        this.next = null;
    }
}

class TimeAwareLinkedList{
    constructor(){
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

        this.tail.next = newNode;
        this.tail = newNode;
    }

    getRecentInserted(seconds){
        const recent = Date.now() - seconds * 1000;
        let current = this.head;
        let result = 'Recently inserted: ';

        while(current){
            if(current.timeStamp >= recent){
                result += current.value + ' ' + `[${this.formatDate(current.timeStamp)}]` + ' -> ';
            }
            current = current.next;
        }
        result += 'null';
        return result;
    }

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