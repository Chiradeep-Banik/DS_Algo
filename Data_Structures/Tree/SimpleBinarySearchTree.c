#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct treeNode
{
    int data;
    struct treeNode *left;
    struct treeNode *right;
};

typedef struct treeNode TreeNode;

#define SIZE sizeof(TreeNode)

TreeNode *createTree(int data)
{
    TreeNode *root = (TreeNode *)malloc(SIZE);
    if (root != NULL)
    {
        root->left = NULL;
        root->right = NULL;
        root->data = data;
    }
    return root;
}

bool insertNode(TreeNode **root, int data)
{
    if (*root == NULL)
    {
        *root = createTree(data);
        return true;
    }
    if ((*root)->data == data)
    {
        return false;
    }
    if ((*root)->data > data)
    {
        return insertNode(&(*root)->left, data);
    }
    else
    {
        return insertNode(&(*root)->right, data);
    }
}

void printTree(TreeNode *root)
{
    if (root == NULL)
    {
        return;
    }
    printf("Value -- %d\n", root->data);
    printf("------Left------\n");
    printTree(root->left);
    printf("------Right------\n");
    printTree(root->right);
    printf("------Done------\n");
}

void printTreeInOrder(TreeNode *root)
{
    if (root == NULL)
    {
        return;
    }
    printTreeInOrder(root->left);
    printf("%d ", root->data);
    printTreeInOrder(root->right);
}

// void printTreeLevelOrder(TreeNode *root){
//     if(root == NULL){
//         return;
//     }
//     Queue *q = createQueue();
//     enqueue(q, root);
//     while(!isEmpty(q)){
//         TreeNode *temp = dequeue(q);
//         printf("%d ", temp->data);
//         if(temp->left != NULL){
//             enqueue(q, temp->left);
//         }
//         if(temp->right != NULL){
//             enqueue(q, temp->right);
//         }
//     }
// }

int findMin(TreeNode *root)
{
    if (root == NULL)
    {
        return -1;
    }
    TreeNode *temp = root;
    while (temp->left != NULL)
    {
        temp = temp->left;
    }
    return temp->data;
}

int findMax(TreeNode *root)
{
    if (root == NULL)
    {
        return -1;
    }
    TreeNode *temp = root;
    while (temp->right != NULL)
    {
        temp = temp->right;
    }
    return temp->data;
}

int height(TreeNode *root)
{
    if (root == NULL)
    {
        return 0;
    }
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    return ((leftHeight > rightHeight) ? leftHeight : rightHeight) + 1;
}

void main()
{
    TreeNode *root = createTree(11);
    insertNode(&root, 10);
    insertNode(&root, 20);
    insertNode(&root, 30);
    insertNode(&root, 40);
    insertNode(&root, 90);
    insertNode(&root, 0);
    insertNode(&root, 9);

    printf("Height %d\n", height(root));
    // printTree(root);
    printTreeInOrder(root);
    printf("\n");
    printf("Min - %d\n", findMin(root));
    printf("Max - %d\n", findMax(root));
}