#include <iostream>

using namespace std;

void swap(int *a, int *b)
{
    int *temp = a;
    b = a;
    a = temp;
}

void print_arr(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << *(arr+i) << " ";
    }
    cout << endl;
}

int *selection_sort(int a[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int* min_val = (a+i);
        int tracker = i;
        for (int j = i + 1; j < n; j++)
        {
            if (*(a+j) < *min_val)
            {
                min_val = (a+j);
                tracker = j;
            }
        }
        swap(*(a+i), *(a+tracker));
    }
    return a;
}

int main()
{
    int array[5] = {4, 1, 2, 5, 3};
    cout << "Before sorting: ";
    print_arr(array, 5);
    int *ans = selection_sort(array, 5);
    cout << "After sorting: ";
    print_arr(ans, 5);
    return 0;
}