/**
 * Balance Factor(BF) -- The difference between the height ofthe left and right sub-trees of a node.
 *          for AVL trees BF -> belongs to {-1, 0, 1}
 * 
 * AVL tree --> a self balancing Binary Search Tree
 *      |--> Deals the balancing using rotations
 *      |-->The types of rotations are:
 *          |-->Left Rotation
 *          |-->Right Rotation
 *          |-->Left-Right Rotation
 *          |-->Right-Left Rotation
 * 
*/

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct AVLNode
{
    int key;
    int height;
    struct AVLNode *left;
    struct AVLNode *right;
};

typedef struct AVLNode AVLNode;

#define SIZE sizeof(AVLNode)

void main()
{
    printf("%d\n", SIZE);
}