class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.count = 0;
    }
    enqueue(data){
        let node = new Node(data);
        if(this.front == null){
            this.front = node;
            this.back = node;
        }else{
            let current = this.back;
            current.next = node;
            this.back = node;
        }
        this.count++;
    }
    dequeue(){
        if(this.front == null){
            return null;
        }else{
            let current = this.front;
            this.front = current.next;
            this.count--;
            return current;
        }
    }
}