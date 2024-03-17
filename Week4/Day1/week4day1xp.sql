-- CREATE TABLE items
-- (
-- 	id_number SERIAL PRIMARY KEY,
-- 	product_name VARCHAR(64) NOT NULL,
-- 	price BIGINT NOT NULL
-- );

-- CREATE TABLE customers
-- (
-- 	id_number SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(32) NOT NULL,
-- 	last_name VARCHAR(32) NOT NULL
-- );

-- INSERT INTO items(product_name, price)
-- VALUES  ('Small Desk', 100),
-- 		('Large Desk', 300),
-- 		('Fan', 80);
	
-- SELECT * FROM items;

-- INSERT INTO customers(first_name, last_name)
-- VALUES  ('Greg', 'Jones'),
-- 		('Sandra', 'Jones'),
-- 		('Scott', 'Scott'),
-- 		('Trevor', 'Green'),
-- 		('Melanie', 'Johnson');

-- SELECT * FROM customers;

-- INSERT INTO customers(first_name, last_name)
-- VALUES  ('Greg', 'Jones'),
-- 		('Sandra', 'Jones'),
-- 		('Scott', 'Scott'),
-- 		('Trevor', 'Green'),
-- 		('Melanie', 'Johnson');

-- SELECT * FROM customers, items;

-- DELETE FROM customers WHERE id_number > 5;

-- SELECT * FROM customers;

-- SELECT * FROM items;

-- SELECT * FROM items WHERE price > 80;

-- SELECT * FROM items WHERE price <= 300;

-- SELECT * FROM customers WHERE last_name = 'Smith';

-- SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Scott'

