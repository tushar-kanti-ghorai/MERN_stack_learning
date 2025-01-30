/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food'
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var Transaction={};
  for(let i=0;i<transactions.length;i++){
    const transaction=transactions[i];
    if(!Transaction[transaction.category]){
      Transaction[transaction.category]=0;
    }

    Transaction[transaction.category]+=transaction.price;//{food:10}

  
  }

  const result=[];
  for(const key in Transaction){
    result.push({
      category:key,
      totalSpent:Transaction[key]

    })
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
