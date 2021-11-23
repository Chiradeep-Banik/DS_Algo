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
        printf("Going Left\n");
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

void main()
{
    TreeNode *root = createTree(11);
    insertNode(&root, 10);
    insertNode(&root, 20);
    insertNode(&root, 30);
    insertNode(&root, 40);
    insertNode(&root, 50);
    insertNode(&root, 9);

    printTree(root);
}