-- CREATE TABLE students
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR(32) NOT NULL,
-- 	first_name VARCHAR(32) NOT NULL,
-- 	birth_date DATE NOT NULL
-- );

-- INSERT INTO students (id, first_name, last_name, birth_date)
-- VALUES
--     (1, 'Marc', 'Benichou', '1998-11-02'),
--     (2, 'Yoan', 'Cohen', '2010-12-03'),
--     (3, 'Lea', 'Benichou', '1987-07-27'),
--     (4, 'Amelia', 'Dux', '1996-04-07'),
--     (5, 'David', 'Grez', '2003-06-14'),
--     (6, 'Omer', 'Simpson', '1980-10-03');

-- SELECT * FROM students;

-- SELECT last_name, first_name FROM students;

-- SELECT last_name, first_name FROM students WHERE id = 2;

-- SELECT last_name, first_name FROM students 
-- WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- SELECT last_name, first_name FROM students 
-- WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a%';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE 'a%';

-- SELECT last_name, first_name FROM students WHERE first_name ILIKE '%a';

-- SELECT last_name, first_name FROM students
-- WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a';

-- SELECT last_name, first_name FROM students WHERE id = 1 or id = 3;

SELECT * FROM students WHERE birth_date >= '2000-01-01'