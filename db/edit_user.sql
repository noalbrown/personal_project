UPDATE user_profile
SET user_name = $2,
email = $3,
first_name = $5,
last_name = $6
WHERE user_id = $1;