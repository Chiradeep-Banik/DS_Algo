/**
 * Tree Traversal
 *      --- There are genarally two types of traversal
 *              - BFS(Breath First Search) - It looks at every node in every level 
 *              - DFS(Depth First Search) - It goes to the bottom of every branch first
 *                      -- Pre-order 
 *                      -- In-order 
 *                      -- Post-order 
*/

class node_queue{
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
        var new_node_queue = new node_queue(val);
        if(this.first == null){
            this.first = new_node_queue;
            this.last = new_node_queue;
            this.length++;
            return this.length;
        }
        this.last.next = new_node_queue;
        this.last =new_node_queue;
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


class node_bst {
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
        var new_node_bst = new node_bst(val);
        if(this.root === null){
            this.root = new_node_bst;
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
                    temp.left = new_node_bst;
                    break;
                }else{
                    temp=temp.left;
                }
            }else{
                if(temp.right == null){
                    temp.right = new_node_bst;
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
//Breath first search --- goes to every node at one level then progresses to the next level --- from left to right and top to down

    breath_first_search(){
        var arr =[];
        var que = new queue_linked_list();
        que.en_queue(this.root);
        while(que.length > 0){
            var temp = que.de_queue();
            arr.push(temp.value);
            if(temp.left != null){
                que.en_queue(temp.left);
            }
            if(temp.right != null){
                que.en_queue(temp.right);
            }
        }
        return arr;
    }
//Depth First Search --- goes to the bottom of every branch first

//Pre-order -- We push the value of the node we visit before continueing 
    DFS_pre_order_right_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            arr.push(temp.value);
            if(temp.right){
                helper(temp.right);
            }
            if(temp.left){
                helper(temp.left);
            }
        }
        helper(temp);
        return arr;
    }
    DFS_pre_order_left_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            arr.push(temp.value);
            if(temp.left){
                helper(temp.left);
            }
            if(temp.right){
                helper(temp.right);
            }
        }
        helper(temp);
        return arr;
    }

//Post-Order -- we traverse to the last node of a branch and then push its value and make our way to the top

    DFS_post_order_left_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            if(temp.left){
                helper(temp.left);
            }
            if(temp.right){
                helper(temp.right);
            }
            arr.push(temp.value);
        }
        helper(temp);
        return arr;
    }
    DFS_post_order_right_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            if(temp.right){
                helper(temp.right);
            }
            if(temp.left){
                helper(temp.left);
            }
            arr.push(temp.value);
        }
        helper(temp);
        return arr;
    }
//In-Order -- we traverse to the left and then push the value and make our way to the top and push its value and then the right
    DFS_in_order_right_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            if(temp.right){
                helper(temp.right);
            }
            arr.push(temp.value);
            if(temp.left){
                helper(temp.left);
            }
        }
        helper(temp);
        return arr;
    }
    DFS_in_order_left_first(){
        var arr = [];
        var temp = this.root;
        function helper(temp){
            if(temp.left){
                helper(temp.left);
            }
            arr.push(temp.value);
            if(temp.right){
                helper(temp.right);
            }
        }
        helper(temp);
        return arr;
    }
}

var tree = new binary_search_tree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log("BFS : [" + tree.breath_first_search() + "]");
console.log("DFS Pre-order left first : [" + tree.DFS_pre_order_left_first() + "]");
console.log("DFS Pre-order right first : [" + tree.DFS_pre_order_right_first() + "]");
console.log("DFS Post-order right first : [" + tree.DFS_post_order_right_first() + "]");
console.log("DFS Post-order left first : [" + tree.DFS_post_order_left_first() + "]");
console.log("DFS In-order left first : [" + tree.DFS_in_order_left_first() + "]");
console.log("DFS In-order right first : [" + tree.DFS_in_order_right_first() + "]");

/**
 * Time complexity for both tpes of traversals are equale
 *      the main difference is there space complexity
 *          --For a wider tree - DFS is more suitable
 *          --For a deeper tree - BFS is more suitable
 * 
 * In-order traversal -- gives us a sorted array
 * Pre-order traversal -- gives us an array that is easy to reconstruct
 * 
*/
