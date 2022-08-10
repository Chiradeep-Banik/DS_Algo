#include<bits/stdc++.h>

using namespace std;

void printNTo1(int n){
    if(n<=0){
        cout << endl;
        return;
    }
    cout << n-- << " ";
    printNTo1(n);
}

int main (){
    int n =13;
    printNTo1(n);
}