var mysql = require('mysql');
var prompt = require("prompt");
var Table = require('cli-table');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

var productPurchased = [];

connection.connect(function(err){
    if (err) throw err;
    console.log("Connection Successful")
});

connection.query('SELECT id, product_name, price FROM products', function(err, result){
	if(err) console.log(err);

	//creates a table for the information from the mysql database to be placed
	var table = new Table({
		head: ['Item Id#', 'Product Name', 'Price'],
		style: {
			head: ['blue'],
			compact: false,
			colAligns: ['center'],
		}
	});

	//loops through each item in the mysql database and pushes that information into a new row in the table
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].id, result[i].product_name, result[i].price]
		);
	}
	console.log(table.toString());

	purchase();
});

var purchase = function() {
    	var productInfo = {
		properties: {
			itemID:{description: ('Please enter the ID # of the item you wish to purchase!')},
			Quantity:{description: ('How many items would you like to purchase?')}
		}
};

	prompt.start();

	prompt.get(productInfo, function(err, res){

		var custPurchase = {
			itemID: res.itemID,
			Quantity: res.Quantity
		};
		
		productPurchased.push(custPurchase);
        console.log(productPurchased);

		connection.query('SELECT * FROM products WHERE id=?', productPurchased[0].itemID, function(err, res){
				if(err) console.log(err, 'That item ID doesn\'t exist');
				
				if(res[0].stock_quantity < productPurchased[0].Quantity){
					console.log('That product is out of stock!');
					connection.end();

				} else if(res[0].stock_quantity >= productPurchased[0].Quantity){

					console.log('');

					console.log(productPurchased[0].Quantity + ' items purchased');

					console.log(res[0].product_name + ' ' + res[0].price);

					var saleTotal = res[0].price * productPurchased[0].Quantity;

					connection.query("UPDATE department_name SET TotalSales = ? WHERE department_name = ?;", [saleTotal, res[0].department_name], function(err, resultOne){
						if(err) console.log('error: ' + err);
						return resultOne;
					})

					console.log('Total: ' + saleTotal);

					newQuantity = res[0].stock_quantity - productPurchased[0].Quantity;
			
					connection.query("UPDATE Products SET StockQuantity = " + newQuantity +" WHERE ItemID = " + productPurchased[0].itemID, function(err, res){
						console.log('');
						console.log('Your order has been processed.  Thank you for shopping with us!');
						console.log('');

						connection.end();
					})

				};

		})
	})
}
