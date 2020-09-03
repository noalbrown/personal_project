SELECT *
FROM user_profile up
  JOIN contact_form cf ON up.user_id = cf.user_id
  FULL JOIN game_list gl ON up.user_id = gl.user_id