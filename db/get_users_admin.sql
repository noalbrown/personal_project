SELECT up.user_id, up.user_name, cf.form, gl.name, gl.background_image
FROM user_profile up
  FULL JOIN contact_form cf ON up.user_id = cf.user_id
  FULL JOIN game_list gl ON up.user_id = gl.user_id