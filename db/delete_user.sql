DELETE FROM user_profile WHERE user_id = $1;
DELETE FROM contact_form WHERE user_contact_id = $1;
DELETE FROM game_list WHERE user_game_id = $1;