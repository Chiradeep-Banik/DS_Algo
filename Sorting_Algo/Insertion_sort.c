//Implementation of Insertion sort

#include <stdio.h>

int *insertion_sort(int *arr, int length)
{
    for (int i = 1; i < length; i++)
    {
        int temp = arr[i];
        int j = i - 1;
        while ((temp < arr[j]) && (j >= 0))
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

void main()
{
    int arr[] = {3, 44, 38, 5, 44};
    int len = sizeof(arr) / sizeof(arr[0]);
    int *sorted_ar = insertion_sort(arr, len);
    for (int i = 0; i < len; i++)
    {
        printf(" %d", sorted_ar[i]);
    }
    printf("\n");
}