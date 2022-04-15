console.clear();

/*
Problem solving approuches --
    - Breakdown the problem
        - Understanding the problem
        - Ask questions -- to break down the problem
        - Write out some of the test cases
        - Write down the steps -- to solve
    - Master the comon catagories of teh problem
*/

// problem 1 - Take a string and return the count of each character

var a = "My PIN is 1234!";  // must return --- {a:3, q:1 , w:1}

function char_count(string){
    string = string.toLowerCase();
    var count = {};
    /* Approch -1
    for(let i =0 ; i< string.length;i++){
        console.log(string[i]);
        count[string[i]] = 0 ;
    }
    for(let i =0 ; i< string.length;i++){
        count[string[i]]++ ;
    }
    */
    // Approch - 2
    for(let i = 0 ; i < string.length;i++){
        if (count[string[i]] > 0){
            count[string[i]]++           
        }
        else{
            count[string[i]] = 1;;
        }
    }
    
    delete count[" "];
    count.sort;
    console.log(count);
}

char_count(a);