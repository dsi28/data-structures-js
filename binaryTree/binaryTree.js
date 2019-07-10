class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let node = new Node(data);
        if(this.root == null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }

    insertNode(parent, node){
        if(node.data < parent.data){
            if(parent.left == null){
                parent.left = node;
            }else{
                insertNode(parent.left, node);
            }
        }else{
            if(parent.right == null){
                parent.right = node;
            }else{
                insertNode(parent.right, node);
            }
        }
    }

    remove(key){
        this.root = this.removeNode(this.root,key);
    }

    removeNode(parent, key){
        if(parent == null){
            return null
        }else if(key < parent.data){
            parent.left = removeNode(parent.left, key);
            return parent;
        }else if(key > parent.data){
            parent.right = this.removeNode(parent.right, key);
            return parent;
        }else{
            if(parent.left == null && parent.right == null){
                parent = null;
                return parent;
            }else if(parent.left == null){
                parent = parent.right;
                return parent;
            }else if(parent.right == null){
                parent = parent.left;
                return parent;
            }else{
                //call this.findMinNode to get the in order successor
                let minDataValue = this.findMinNode(parent.right);
                parent.data = minDataValue;
                parent.right = this.removeNode(parent.right, minDataValue);
                return parent;
            }
        }
    }

    findMinNode(parent){
        if(parent.left == null){
            return parent;
        }else{
            return this.findMinNode(parent.left);
        }
    }

    search(parent, data){
        if(data < parent.data){
            return this.search(parent.left, data);
        }else if(data > parent.data){
            return this.search(parent.right);
        }else{
            return parent;
        }
    }
}