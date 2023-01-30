const input = require(`readline-sync`)
// let maze=[[ 1, 0, 0, 0 ],
//           [ 1, 1, 0, 1 ],
//           [ 0, 1, 0, 0 ],
//           [ 1, 1, 1, 1 ]];
// let src = maze[1][1];
// let dest = maze[3][3];
// let x = maze.length;
// let y = x;

let x = parseInt(input.question("Enter the size of the matrix"));
let maze = new Array(x)
for(let i=0;i<x;i++){
    maze[i] = new Array(x)
}

//Getting input
for(let i=0;i<x;i++){
    for(let j=0;j<x;j++){
        maze[i][j] = parseInt(input.question("Enter the Array Elements : "));
    }
}

let src = maze[0][0];
// let dest = maze[3][3];

function solve(maze,sol,i,j,row,col){

  if(i<0 || i>=x || j<0 || j>=x){
        return;
    }

    if(maze[i][j] == src){
        maze[i][j] = 2;
        sol[i][j] = src;
    }
    else if (maze[i][j]!=src){
        return;
    }
    solve(maze,sol,i+1,j,row,col);
    solve(maze,sol,i,j+1,row,col);
    solve(maze,sol,i-1,j,row,col);
    solve(maze,sol,i,j-1,row,col);
   
   if(i==row && j==col){
        console.log(sol);
       return sol;
    }

}

function path(maze,i,j,row,col){
    let sol = []
    sol = new Array(x).fill(0)
    for(let i=0;i<x;i++){
        sol[i]=new Array(x).fill(0)
    }
    // console.log(sol);
   solve(maze,sol,i,j,row,col);

}
console.log(maze);
path(maze,0,0,3,3)



