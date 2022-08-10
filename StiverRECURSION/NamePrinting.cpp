#include<bits/stdc++.h>

using namespace std;

void printName(string name){
    static int counter = 0;
    if(counter == 5){
        return;
    }
    cout<< counter << " : " << name << endl;
    counter++;
    printName(name);
}

int main(){
    string name = "banik";
    printName(name);
}