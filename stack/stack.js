class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.count = 0;
    }
    
    push(data){
        let node = new Node(data);
        if(this.top == null){
            this.top = node;
        }else{
            let current = this.top;
            node.next = current;
            this.top = node;
        }
        this.count++;
    }

    pop(){
        if(this.top == null){
            return null;
        }else{
            let current = this.top;
            this.top = current.next;
            this.count--;
            return current;
        }
    }

}