class HashTable{
    constructor(size = 24){
        this.size = size;
        this.buckets = new Array(4);
        this.count = 0;
    }

    hash(key){
        return key.toString().length % this.size;
    }

    set(key,value){
        let index = this.hash(key);

        if(!this.buckets[index]){
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
    }

    get(key){
        let index = this.hash(key);
        for (const e of this.buckets[index]) {
            if(e[0] === key){
                return e[1];
            }
        }
    }
}