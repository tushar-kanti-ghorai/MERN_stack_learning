function calculateTotalSpentByCategory(transactions) {
    // Create an empty object to store the total spent for each category
    const categoryTotals = {};

    // Use a for loop to iterate through each transaction
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        
        // If the category is not yet in the object, initialize it
        if (!categoryTotals[transaction.category]) {
            categoryTotals[transaction.category] = 0;
        }
        
        // Add the price of the current transaction to the respective category
        categoryTotals[transaction.category] += transaction.price;
        console.log(categoryTotals);
    }



    // Convert the object to an array of objects
    const result = [];
    for (const key in categoryTotals) {
        result.push({
            category: key,
            totalSpent: categoryTotals[key]
        });
    }

    return result;
}

// Example usage:
const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656163200000, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656249600000, price: 15, category: 'Books', itemName: 'Novel' },
    { id: 4, timestamp: 1656336000000, price: 30, category: 'Books', itemName: 'Magazine' }
];

// Call the function and print the result
const result = calculateTotalSpentByCategory(transactions);
console.log(result);
