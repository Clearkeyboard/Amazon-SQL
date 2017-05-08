var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sukhoi47',
    database: 'bamazon'
});

function amount(){inquirer.prompt([

            {
                type:"input",
                name:"quantity",
                message: "How many would you like to buy?" 
            }
        ]).then(function(amt){
            
        })
}
connection.connect(function(err){
    if (err) throw err;
    console.log("Connection Successful")
})

connection.query("SELECT * FROM products", function(err, res){
      for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].deparment_name + " | $" + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------");
});
inquirer.prompt([

    {
        type:"list",
        name:"name",
        message: "Which item would you like to buy?",
        choices: ['Dog', 'Wagner', 'Watch', 'Television', 'SNES','Catan', 'Huse on the Hill','Risk', 'Batte at Kemballs Cascade', 'Nintendo Switch', 'Playstation VR']
    }
]).then(function(choice){
    switch (choice){
        case Dog: 
        amount();
    }
})