#include <stdio.h>
#include <stdlib.h>

struct node {
    int value;
    struct node *next;
};

struct linked_list{
    struct node *head;
    struct node *tail;
    int length; 
};

void push(struct linked_list *list, int value){
    struct node *new_node = (struct node *)malloc(sizeof(struct node));
    new_node->value = value;
    new_node->next = NULL;
    if(list->length == 0){
        list->head = new_node;
        list->tail = new_node;
    }else{
        list->tail->next = new_node;
        list->tail = new_node;
    }
    list->length++;
    printf("pushed %d\n", value);
}

void pop(struct linked_list *list){
    if(list->length == 0){
        printf("list is empty\n");
    }else{
        if(list->length == 1){
            list->head = NULL;
            list->tail = NULL;
        }else{
            struct node *temp = list->head;
            while(temp->next != list->tail){
                temp = temp->next;
            }
            temp->next = NULL;
            list->tail = temp;
        }
        list->length--;
    }
    printf("popped\n");
}

void print_list(struct linked_list* list){
    struct node *current = list->head;
    for(;current != NULL; current = current->next){
        printf("%d->", current->value);
    }
    printf("NULL Length==%d\n", list->length);
}


void main(){
    struct linked_list* list = (struct linked_list*)malloc(sizeof(struct linked_list));
    list->tail = NULL;
    list->head = NULL;
    list->length = 0;
    push(list, 1);
    push(list, 13);
    push(list, 3);
    push(list, 5);
    push(list, 7);
    print_list(list);
    pop(list);
    print_list(list);
    // push(list, 1);
}
