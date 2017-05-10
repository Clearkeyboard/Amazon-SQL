CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price INT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM bamazon.products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Dog','pets', 40, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Wagner', 'pets', 1, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Watch', 'electronics', 250, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Television', 'electronics', 400, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('SNES', 'electronics', 150, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Catan', 'Toys&Games', 40, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('House on the Hill', 'Toys&Games', 40, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Risk', 'Toys&Games', 40, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Battle at Kemballs Cascade', 'Toys&Games', 35, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Nintendo Switch', 'electronics', 300, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Playstation VR', 'pets', 1, 1);

USE bamazon;
CREATE TABLE Departments(
DepartmentId int AUTO_INCREMENT,
PRIMARY KEY(DepartmentId),
department_name varchar(50) NOT NULL,
OverHeadCosts DECIMAL(11,2) NOT NULL,
TotalSales DECIMAL(11,2) NOT NULL);


INSERT INTO Departments (department_name, OverHeadCosts, TotalSales) VALUES (
'Pets',
10000,
0);

INSERT INTO Departments (department_name, OverHeadCosts, TotalSales) VALUES (
'electronics',
10000,
0);

INSERT INTO Departments (department_name, OverHeadCosts, TotalSales) VALUES (
'Toys&Games',
20000,
0);
