CREATE TABLE user_profile
(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(75),
  email VARCHAR(75),
  password VARCHAR(300),
  first_name VARCHAR(75),
  last_name VARCHAR(75)
);

CREATE TABLE contact_form
(
  user_contact_id SERIAL PRIMARY KEY,
  form VARCHAR(500),
  user_id INT REFERENCES user_profile(user_id)
);

CREATE TABLE game_list
(
  user_game_id SERIAL PRIMARY KEY,
  name TEXT,
  background_image TEXT,
  user_id INT REFERENCES user_profile(user_id)
);