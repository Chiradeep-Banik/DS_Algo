#include <iostream>
#include <array>
#include <vector>

using namespace std;

int main()
{

    array<int, 2> arr = {1, 2};

    cout << "Size : " << arr.size() << endl;
    arr.fill(3);
    cout << "Value : " << arr.at(0) << endl;

    vector<string, allocator<string>> vec = {"Hello", "World"};
    cout << "Size : " << vec.size() << endl;
    return 0;
}