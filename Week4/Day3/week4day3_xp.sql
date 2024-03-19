-- EXERCISE 1
-- 1
-- SELECT title, description, language.name FROM film;
-- 2
-- RIGHT JOIN language ON language.language_id = film.language_id
-- ORDER BY language.language_id DESC;
-- 3
-- SELECT * FROM language;
-- SELECT title, language_id FROM film
-- ORDER BY language_id DESC;
-- 4
-- CREATE TABLE new_film
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(64)
-- );
-- INSERT INTO new_film(name)
-- VALUES
-- ('Lord of The Rings'),
-- ('Ready Player One'),
-- ('Matrix');
-- 5
-- CREATE TABLE customer_review
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
-- 	language_id INT REFERENCES language(language_id),
-- 	title VARCHAR(64) NOT NULL,
-- 	score INT CHECK (score >= 1 AND score <= 10),
-- 	review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
--6
-- INSERT INTO customer_review 
-- (film_id, language_id, title, score, review_text)
-- VALUES
-- ((SELECT id FROM new_film WHERE id = 1), (SELECT language_id FROM language WHERE name = 'English'), '10/10', 10, 'Sababchick'),
-- ((SELECT id FROM new_film WHERE id = 2), (SELECT language_id FROM language WHERE name = 'English'), 'Cool', 10, 'Sababchick');

-- SELECT new_film.name, language.name as language, title, score FROM customer_review
-- JOIN new_film ON new_film.id = customer_review.film_id
-- JOIN language ON language.language_id = customer_review.language_id;
--7
-- DELETE FROM new_film
-- WHERE id = 1;

-- SELECT new_film.name, language.name as language, title, score FROM customer_review
-- JOIN new_film ON new_film.id = customer_review.film_id
-- JOIN language ON language.language_id = customer_review.language_id;

-- EXERCISE 2
-- 1
-- SELECT * FROM film ORDER BY film_id ASC;
-- UPDATE film
-- SET language_id = 2
-- WHERE film_id BETWEEN 0 AND 10;
-- 2
-- customer_address_id_fkey
--This key means that we can't fetch address from customer straightforward, 
--but we can find it in address table with it
-- 3
-- DROP TABLE customer_review;
-- We can drop it easily, cause
-- it depended on other tables, but no one depended on it.
-- 4
-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL;
-- 5
-- SELECT film.title,film.rental_rate, rental.rental_date, rental.return_date 
-- FROM rental
-- JOIN inventory ON inventory.inventory_id = rental.inventory_id
-- JOIN film ON film.film_id = inventory.film_id
-- WHERE rental.return_date IS NULL ORDER BY film.rental_rate DESC LIMIT 30;
-- 6
-- 1
-- SELECT film.title , film.description, actor.* FROM film
-- JOIN film_actor ON film_actor.film_id = film.film_id
-- JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
-- AND (film.description ILIKE '%sumo%');
-- 2
-- SELECT * FROM film 
-- JOIN film_category ON film_category.film_id = film.film_id
-- JOIN category ON category.category_id = film_category.category_id
-- WHERE film.length < 60 AND film.rating = 'R' AND category.name = 'Documentary';
-- 3
-- SELECT * FROM film
-- JOIN inventory ON inventory.film_id = film.film_id
-- JOIN rental ON rental.inventory_id = inventory.inventory_id
-- JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
-- AND film.rental_rate > 4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- 4
SELECT * FROM film
JOIN inventory ON inventory.film_id = film.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1







