/**
 * Stacks -- Abstract data structure -- It is just a logical concept
 *      -- Stack is LIFO (Last In First Out) principle
 *                  --The first element is the last element to be removed 
 * 
 *      Uses for a Stack:
 *          - Undo/redo
 *          - Browser History
 *          - Function call handeling
*/

//Array implementation of a Stack -- not good as it has many extra features

class stack_array{
    constructor(){
        this.stack= [];
    }
    add(data){
        this.stack.push(data);
        return this;
    }
    remove(){
        this.stack.pop();
        return this;
    }
}

var staack= new stack_array();

staack.add(13);
staack.add(2);
staack.remove();

console.log(staack);

//Linked List implementation of a Stack

class node{
    constructor(value){
        this.value= value;
        this.prev= null;
    }
}

class stack_linked_list{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val){
        var new_node = new node(val);
        if(this.first == null){
            this.first = new_node;
            this.last = new_node;
            this.length++;
            return this.length;
        }
        new_node.prev = this.last;
        this.last = new_node;
        this.length++;
        return this.length;
    }

    pop(){
        if(this.first == null){
            return undefined;
        }
        var temp = this.last;
        if(this.length == 1){
            this.first = null;
            this.last = null;
            this.length = 0;
            return temp.value;
        }
        this.last =temp.prev;
        this.length--;
        return temp.value;
    }
}

var stack = new stack_linked_list();

console.log("Length : " + stack.push(13));
console.log("Length : " + stack.push(2));
console.log("Length : " + stack.push(1));
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.last);


/**
 * Big -O of stacks
 *      -Insertion - O(1)
 *      -Deletion - O(1)
 *      -Traversal - O(n)
 * 
 *  --Generally used for quick insertion and deletion only
*/