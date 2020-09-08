INSERT INTO game_list
  (name, background_image, user_id)
VALUES
  ($1, $2, $3);
SELECT *
FROM game_list