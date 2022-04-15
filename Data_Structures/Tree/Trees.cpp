#include <iostream>

using namespace std;

class node
{
public:
    double value;
    int count = 1;
    node *left = NULL;
    node *right = NULL;

    node(double val)
    {
        value = val;
    }
};

typedef class node *nodeptr;

void print_node(nodeptr ptr)
{
    cout << "value: " << ptr->value << "\n"
         << " count: " << ptr->count << endl
         << "left: " << ptr->left << "\n"
         << "right: " << ptr->right << endl;
}

class binary_search_tree
{
public:
    nodeptr root = NULL;

    void insert(double val)
    {
        nodeptr new_node = new node(val);
        if (root == NULL){
            root = new_node;
        }
        else{
            nodeptr temp = root;
            while (true)
            {
                if (val == temp->value)
                {
                    temp->count++;
                    break;
                }
                if (val < temp->value)
                {
                    if (temp->left == NULL)
                    {
                        temp->left = new_node;
                        break;
                    }
                    else
                    {
                        temp = temp->left;
                    }
                }
                else
                {
                    if (temp->right == NULL)
                    {
                        temp->right = new_node;
                        break;
                    }
                    else
                    {
                        temp = temp->right;
                    }
                }
            }
        }
    }

    int search(double val){
        if(root == NULL){
            return 0;
        }
        nodeptr temp = root;
        while (true){
            if(val == temp->value){
                return 1;
            }
            if(val < temp->value){
                temp = temp->left;
            }else{
                temp = temp->right;
            }
            if(temp == NULL){
                return 0;
            }
        }
        
    }
};

int main()
{

    binary_search_tree tree;

    tree.insert(13);
    tree.insert(10);
    tree.insert(16);
    tree.insert(8);
    tree.insert(9);
    tree.insert(13);
    tree.insert(13);
    tree.insert(8);

    cout << tree.search(13) << endl; 
    cout << tree.root->left->left->right->value << endl;
    return 0;
}