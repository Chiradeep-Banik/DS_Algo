var adjecency_matrix = 
[
    [0,1,1,1,0], 
    [1,0,1,0,0],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0]
];

var adjecency_list =[[0,1],[0,2],[0,3],[2,3],[1,2],[2,4],[3,4]];

var incidence_matrix =
[
    [1,1,1,0,0,0,0],
    [1,0,0,1,0,0,0],
    [0,1,0,1,1,1,0],
    [0,0,1,0,1,0,1],
    [0,0,0,0,0,1,1]
];

var start = adjecency_matrix[0][0];
var visited_log = new Array(adjecency_matrix.length).fill(false);
console.log("Adjecency_matrix : ",adjecency_matrix);
console.log("Visited Log : ",visited_log);
console.log("Adjecency List : ",adjecency_list);
console.log("Incidence Matrix : ",incidence_matrix);
