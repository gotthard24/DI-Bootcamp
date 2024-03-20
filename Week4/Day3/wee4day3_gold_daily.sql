-- CREATE TABLE items
-- (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(64) NOT NULL,
-- 	price INT
-- );
-- CREATE TABLE product_orders
-- (
-- 	order_id SERIAL NOT NULL,
-- 	item_id INT	REFERENCES items(item_id)
-- );
-- INSERT INTO items (item_name, price)
-- VALUES
-- ('Flugegeheimen', 999),
-- ('Bear trap', 100),
-- ('Flyaga', 15),
-- ('Suhpie', 10);

-- INSERT INTO product_orders (order_id, item_id)
-- VALUES
-- (1,(SELECT item_id FROM items WHERE item_name = 'Flugegeheimen')),
-- (2,(SELECT item_id FROM items WHERE item_name = 'Flugegeheimen')),
-- (3,(SELECT item_id FROM items WHERE item_name = 'Flugegeheimen')),
-- (1,(SELECT item_id FROM items WHERE item_name = 'Flyaga')),
-- (2,(SELECT item_id FROM items WHERE item_name = 'Flyaga')),
-- (3,(SELECT item_id FROM items WHERE item_name = 'Flyaga')),
-- (1,(SELECT item_id FROM items WHERE item_name = 'Suhpie')),
-- (2,(SELECT item_id FROM items WHERE item_name = 'Suhpie')),
-- (3,(SELECT item_id FROM items WHERE item_name = 'Suhpie'));

-- SELECT * FROM product_orders ORDER BY order_id;

CREATE OR REPLACE FUNCTION calculate_order(order_to_calc INT)
RETURNS INT AS
$$
DECLARE
    total_price INT := 0;
BEGIN
    SELECT SUM(items.price) INTO total_price
    FROM product_orders
    INNER JOIN items ON product_orders.item_id = items.item_id
    WHERE product_orders.order_id = order_to_calc;

    RETURN total_price;
END;
$$
LANGUAGE plpgsql;

SELECT calculate_order(1)

