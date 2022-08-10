#include<bits/stdc++.h>

using namespace std;

void print1ToN(int n){
    static int i =0;
    if(i>n){
        cout << endl;
        return;
    }
    cout << i << " ";
    i++;
    print1ToN(n);
}

int main (){
    int n =13;
    print1ToN(n);
}