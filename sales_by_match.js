function sockMerchant(n, ar) {
    // Write your code here 10 20 20 10 10 30 50 10 20
    const colorCount = {};
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        let color = ar[i];
        // Count each sock color
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    
    // Calculate pairs for each color
    for (let color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }

    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));