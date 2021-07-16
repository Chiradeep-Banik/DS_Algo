/**
 * Trees -- Non-Linear Data Structure that contain nodes and are connected in a parent-child relation
 *              -- Each node can have multiple pointers to other nodes
 *              
 *          --- Tree has various features:
 *                  - ROOT --- the main node from which the tree starts
 *                  - PARENT --- the previous node of the child node
 *                  - CHILD --- the node directly connected to another node while moving away from the Root 
 *                  - LEAF --- nodes that have no pointers to other nodes
 *                  - SIBLINGS --- Child nodes with the same parent
 *                  - LEVEL --- the number of levels from the root node
 *                  - EDGE --- the connection between the parent and child node
 * 
 *         --- Trees are used for:
 *                  - HTML DOM tree
 *                  - Network Routings
 *                  - Artificial Intelligence --- Mini-Max Algorithm(Game theory)
 *                  - Folders in our computer
 *                  - JSON files
 * 
 * Binary Tree --- They are trees with only 2 or less children nodes
 *      
 *      Binary Search Tree --- They are binary trees that are sorted in a particular order
 *                             - The elements smaller then the parent node are always on the left side of the parent
 *                             - The elements bigger then the parent node are always on the right side of the parent      
 * 
*/

//Binary Search Tree

class node {
    constructor(value){
        this.value = value;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class binary_search_tree{
    constructor(){
        this.root = null;
    }
    insert(val){                //inserts the value into the tree at the correct position
        var new_node = new node(val);
        if(this.root === null){
            this.root = new_node;
            return this;
        }
        var temp = this.root;
        while(true){
            if(val == temp.value){
                temp.count++;
                return this;
            }
            if(temp.value >val){
                if(temp.left == null){
                    temp.left = new_node;
                    break;
                }else{
                    temp=temp.left;
                }
            }else{
                if(temp.right == null){
                    temp.right = new_node;
                    break;
                }else{
                    temp = temp.right;
                }
            }
        }
        return this;
    }

    search(val){                //returns true if the value is found in the tree
        if (this.root == null){
            return false;
        }
        var temp = this.root;
        while(true){
            if(val == temp.value)
                return true;
            
            if(temp.value > val)
                temp = temp.left;  
            else
                temp = temp.right;

            if(temp == null)
                return false; 
        }
    }
}

var tree = new binary_search_tree();

tree.insert(13);
tree.insert(10);
tree.insert(16);
tree.insert(8);
tree.insert(9);
tree.insert(13);
tree.insert(13);
tree.insert(8);

console.log(tree.search(21));
console.log(tree);

/**
 * BIG - O  of binary search tree
 * 
 *         Insertion 
 *              - O(log n) --- best and average case as we are removing half the tree from search parameter after each iteration
 *         Searching
 *              - O(log n) --- best and average case as we are removing half the tree from search parameter after each iteration
 * 
 *      worst case -- O(n²) -- both for inserting and searching
 * 
*/

