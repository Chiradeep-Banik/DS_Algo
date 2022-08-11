#include<bits/stdc++.h>

using namespace std;

bool isPal(string s){
    static int i = 0;
    if(i>=s.size()/2){
        return true;
    }
    if(s[i] != s[s.size()-i-1]){
        return false;
    }
    i++;
    return isPal(s);
}

int main(){
    string s = "mada`m";
    cout << isPal(s) << endl;   
}