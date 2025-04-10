function bonAppetit(bill, k, b) {
    // Write your code here
    // Calculate the total cost excluding the item Anna didn't eat
    let totalShared = 0;

    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            totalShared += bill[i];
        }
    }

    // Anna's fair share
    let annaShare = totalShared / 2;

    // Compare with what Brian charged
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

bonAppetit([3,10,2,9], 1, 12);