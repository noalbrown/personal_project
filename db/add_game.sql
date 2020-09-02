INSERT INTO game_list
  (user_games, game_img)
VALUES
  ($1, $2);
SELECT *
FROM game_list