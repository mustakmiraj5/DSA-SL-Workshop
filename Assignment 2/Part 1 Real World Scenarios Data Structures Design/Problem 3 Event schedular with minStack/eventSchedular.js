class MinStack {
    constructor() {
        this.taskStack = new Array();   // Creating 2 array and assign -1 to top is constant time operation. O(1) time and space
        this.minStack = new Array();
        this.top = -1;
    }

    push(task, priority) {
        const taskEntry = { task, priority };   // Create object is 1 operation. O(1)
        this.top++;         // 1 operation to increment the value
        this.taskStack[this.top] = taskEntry;       // assign value 1 operation
        // update minstack is 1 operation for each cases.O(1)time & space for each push
        if (this.top === 0) {
            this.minStack[this.top] = taskEntry;
        }else if (taskEntry.priority <= this.minStack[this.top - 1].priority) {
            this.minStack[this.top] = taskEntry;
        }else {
            this.minStack[this.top] = this.minStack[this.top - 1];
        }
        console.log(`Pushed task: ${task} (priority: ${priority}). Current min priority: ${this.getMin()}`);  //1 operation
    }

    pop() {
        if (this.top < 0) {
            console.log('Stack underflow');     // checking underflow 1 operation
            return null; 
          }
        const taskEntry = this.taskStack[this.top--]; // access taskstack and decrement value of top 2 operations
        

        console.log(`Popped task: ${taskEntry.task} (priority: ${taskEntry.priority}). Current min priority: ${this.getMin() || 'Stack is empty'}`);        // getMin() is O(1)
        return taskEntry;
    }

    getMin() {
        if (this.top < 0) {
            return null;        // check underflow 1 operation
        }
        return JSON.stringify(this.minStack[this.top]);   // access minstack 1 operation. O(1) time complexity
    }

    isEmpty() {
        return this.taskStack.length === 0;   // 1 operation
    }

    peek() {
        return this.taskStack.length > 0 ? this.taskStack[this.taskStack.length - 1] : null;
    }
}

// Example usage
const scheduler = new MinStack();
scheduler.push("Task1", 3); // Pushed Task1 (priority: 3). Current min: 3
scheduler.push("Task2", 1); // Pushed Task2 (priority: 1). Current min: 1
scheduler.push("Task3", 2); // Pushed Task3 (priority: 2). Current min: 1
console.log(`Highest priority: ${scheduler.getMin()}`); // Highest priority: 1
scheduler.pop(); // Popped Task3 (priority: 2). Current min: 1
scheduler.pop(); // Popped Task2 (priority: 1). Current min: 3
console.log(`Highest priority: ${scheduler.getMin()}`); // Highest priority: 3