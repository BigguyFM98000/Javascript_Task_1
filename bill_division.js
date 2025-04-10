function bonAppetit(bill, k, b) {
    // Write your code here
    // bcharged and bactual variables
    // loop through the bill array and pass the meal anna left
    let billCharged = b;
    let billActual = 0;
    let diff = 0; 
    for(let i = 0; i < bill.length; i++){
        if(bill[i] !== bill[k]){
            billActual += bill[i];
        } else {
            continue;
        }
    }
    
    billActual = billActual / 2;
    if(billCharged === billActual){
        console.log("Bon Appetit");
    }else {
        diff = billCharged - billActual;
        console.log(diff);
    }
}

bonAppetit([3,10,2,9], 1, 12); // code failed 2 cases but passed the rest