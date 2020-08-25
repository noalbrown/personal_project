INSERT INTO user_profile
  (user_name, email, password, first_name, last_name)
VALUES
  ($1, $2, $3, $4, $5);
SELECT user_id, user_name, email
FROM users
where user_name = $1;