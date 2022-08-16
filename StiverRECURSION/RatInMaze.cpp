#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
    
    void solve(vector<vector<int>>& m,int x,int y,string store,vector<string>& result,int n,vector<vector<bool>>& visited){
        
        if(x == n-1 && y == n-1){

            result.push_back(store);
            return;
        }
        

        // cout << x<<" ";
        if(m[x][y] == 1){
            if(x+1<n && !visited[x][y] && m[x+1][y] == 1){
                visited[x][y] = true;
                solve(m,x+1,y,store+'D',result,n,visited);
                visited[x][y] = false;
            }
            
            if(y-1>0 && !visited[x][y] && m[x][y-1] == 1){
                visited[x][y] = true;
                solve(m,x,y-1,store + 'L',result,n,visited);
                visited[x][y] = false;
            }
            
            if(y+1<n && !visited[x][y] && m[x][y+1] == 1){
                visited[x][y] = true;
                solve(m,x,y+1,store+'R',result,n,visited);
                visited[x][y] = false;
            }
    
            if(x-1 >0 && !visited[x][y] && m[x-1][y] == 1){
                visited[x][y] = true;
                solve(m,x-1,y,store+'U',result,n,visited);
                visited[x][y] = false;
            }
                
        }
    }
    
    vector<string> findPath(vector<vector<int>> &m, int n) {
        vector<string> result;
        vector<vector<bool>> visited(n,vector<bool>(n,false));
        
        if(m[0][0] == 0){
            return result;
        }
        solve(m,0,0,"",result,n,visited);
    
        return result; 
    }
};