--DAILY
-- PART I
-- CREATE TABLE customer
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(32) NOT NULL,
-- 	last_name VARCHAR(32) NOT NULL
-- );
-- CREATE TABLE customer_profile
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOL DEFAULT false,
-- 	customer_id INT REFERENCES customer(id)
-- );
-- INSERT INTO customer (first_name, last_name)
-- VALUES 
-- ('John','Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES
-- (true, (SELECT id FROM customer WHERE id = 1)),
-- (false, (SELECT id FROM customer WHERE id = 2));
-- SELECT first_name FROM customer
-- JOIN customer_profile ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isloggedin IS TRUE;
-- SELECT customer.first_name, customer_profile.isloggedin FROM customer
-- FULL JOIN customer_profile ON customer_profile.customer_id = customer.id;
-- SELECT COUNT(*) FROM customer
-- FULL JOIN customer_profile ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isloggedin IS NOT TRUE;
-- PART II
-- CREATE TABLE book
-- (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(64) NOT NULL,
-- 	author VARCHAR(64) NOT NULL
-- );
-- INSERT INTO book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K. Rowling'),
-- ('To kill a mockingbird','Harper Lee');
-- CREATE TABLE student 
-- (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(64) NOT NULL UNIQUE,
-- 	age SMALLINT CHECK (age <= 15)
-- );
-- INSERT INTO student(name, age)
-- VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);
-- CREATE TABLE library
-- (
-- 	book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE NOT NULL,
-- 	PRIMARY KEY (book_fk_id, student_fk_id)
-- );
-- INSERT INTO library (student_fk_id, book_fk_id, borrowed_date)
-- VALUES
-- (
-- 	(SELECT student_id FROM student WHERE name = 'John'),
-- 	(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 	'15/02/2022'
-- ),
-- (
-- 	(SELECT student_id FROM student WHERE name = 'Bob'),
-- 	(SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
-- 	'03/03/2021'
-- ),
-- (
-- 	(SELECT student_id FROM student WHERE name = 'Lera'),
-- 	(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 	'23/05/2021'
-- ),
-- (
-- 	(SELECT student_id FROM student WHERE name = 'Bob'),
-- 	(SELECT book_id FROM book WHERE title = 'Harry Potter'),
-- 	'12/08/2021'
-- );
-- SELECT * FROM library;
-- SELECT
--     (SELECT title FROM book WHERE book_id = library.book_fk_id),
--     (SELECT name FROM student WHERE student_id = library.student_fk_id)
-- FROM library;
-- SELECT
-- 	(SELECT AVG(age) FROM student),
-- 	(SELECT title FROM book WHERE book.title = 'Alice In Wonderland')
-- FROM library LIMIT 1;
-- DELETE FROM student
-- WHERE name = 'John';
-- SELECT
--     (SELECT title FROM book WHERE book_id = library.book_fk_id),
--     (SELECT name FROM student WHERE student_id = library.student_fk_id)
-- FROM library;
