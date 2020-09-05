INSERT INTO game_list
  (user_games, user_id)
VALUES
  ($1, $2);
SELECT *
FROM game_list