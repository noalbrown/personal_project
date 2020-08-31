SELECT *
FROM user_profile up
  JOIN contact_form cf ON up.user_id = cf.user_contact_id
  JOIN game_list gl ON up.user_id = gl.user_id
WHERE up.user_id = $1