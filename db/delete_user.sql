DELETE FROM contact_form WHERE user_id = $1;
DELETE FROM user_profile WHERE user_id = $1;
DELETE FROM game_list WHERE user_id = $1;