function kangaroo(x1, v1, x2, v2) {
    // Write your code here 0 3 4 2
    // declare jumpx1 variable and jumpx2
    // loop for 10000 times
    // use an if statement to check if the jumps are equal or not
    // if they are equal return yes if not return no
    let jumpx1 = x1;
    let jumpx2 = x2; 
    for(let i = 0; i < 10000; i++){
        jumpx1 += v1;
        jumpx2 += v2;
        
        if(jumpx1 == jumpx2){
            return "YES";
            break;
        } 
    } 
    if(jumpx1 !== jumpx2){
       return "NO"; 
    }
}

console.log(kangaroo(0,3,4,2));