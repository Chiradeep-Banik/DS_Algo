/**
 * Queue  --  Abqueueed Data Structure -- Logical stucture
 * 
 *      -FIFO (First-In-First-Out) type of data structure
 *          - the first element added to the queue will be the first element
 * 
*/

//Array implementation of a Queue -- not good as it has many extra features

class queue_array{
    constructor(){
        this.queue= [];
    }
    en_queue(data){
        this.queue.push(data);
        return this;
    }
    de_queue(){
        this.queue.shift();
        return this;
    }
}

var queuee= new queue_array();

queuee.en_queue(13);
queuee.en_queue(2);
queuee.en_queue(3);
queuee.de_queue();

console.log(queuee);

//Linked List implementation of a Queue

class node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}

class queue_linked_list{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    en_queue(val){
        var new_node = new node(val);
        if(this.first == null){
            this.first = new_node;
            this.last = new_node;
            this.length++;
            return this.length;
        }
        this.last.next = new_node;
        this.last =new_node;
        this.length++;
        return this.length;
    }

    de_queue(){
        if(this.first == null){
            return undefined;
        }
        var temp = this.first;
        if(this.length == 1){
            this.first = null;
            this.last = null;
            this.length = 0;
            return temp.value;
        }
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
}

var queue = new queue_linked_list();

console.log("Length : " + queue.en_queue(13));
console.log("Length : " + queue.en_queue(2));
console.log("Length : " + queue.en_queue(1));
console.log(queue.de_queue());
console.log(queue.de_queue());

console.log(queue.first);

/**
 * Big O -- 
 *      For array -- it is not appropiate as it has O(n) for either enqueue or dequeue
 *  
 *      For linked list -- it is O(1) for enqueue and dequeue
 * 
 *      For other operations like searching and accessing -- it is O(n) -- not generally used for it
*/

