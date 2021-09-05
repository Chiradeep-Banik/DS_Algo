function chessBoardCellColor(cell1, cell2) {
    //black == 0; white == 1
    var cl =[] ;
    var c1_a = cell1[0].charCodeAt(0) - 65;
    var c2_a = cell2[0].charCodeAt(0) - 65;
    var c1_b = parseInt(cell1[1]);
    var c2_b = parseInt(cell2[1]);
    console.log(c1_a,c2_a,c1_b,c2_b);
    cl[0] = (c1_a + c1_b) % 2;
    cl[1] = (c2_a + c2_b) % 2;
    return (cl[0] == cl[1]);
}

var cell1 = "A1",cell2 = "B3";

console.log(chessBoardCellColor(cell1, cell2));