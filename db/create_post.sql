INSERT INTO contact_form
  (form, user_id)
VALUES
  ($1, $2);
SELECT *
FROM contact_form
