class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let node = new Node(data);
        let current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(data, index){
        let node = new Node(data);
        let current = this.head;
        let prev;
        if(index == 0){
            node.next = this.head;
            this.head = node;
        }else{
            let i = 0;
            while(i<index){
                i++;
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
        }
        size++;
    }
    removeAt(index){
        let current = this.head,
        prev,
        i = 0;
        if(index == 0){
            this.head = current.next;
            current.next = null;
        }else{
            while(i < index){
                i++;
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            current.next = null;
        }
        size--;
    }
    removeElement(data){
        let current = this.head,
        prev;
        while(current != null){
            if(current.data === data){
                if(current == this.head){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                current.next = null;
                size--;
            }else{
                prev = current;
                current = current.next;
            }
        }
    }
    indexOf(data){
        let current = this.head,
        i=0;
        while(i < this.size){
            if(current.data === data){
                return i;
            }else{
                i++;
                current = current.next;
            }
        }
    }
    isEmpty(){
        if(size === 0){
            return true;
        }else{
            return false;
        }
    }
}
