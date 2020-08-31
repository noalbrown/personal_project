SELECT *
FROM user_profile up
  JOIN contact_form cf ON up.user_id = cf.user_id
WHERE user_id = $1
