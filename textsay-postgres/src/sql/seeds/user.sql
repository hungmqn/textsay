BEGIN TRANSACTION;

INSERT INTO "user"(
	id, username, password, role, created_at, updated_at)
	VALUES
  (1, 'amaithi', '7f0d304cdc00d61f05d619168ad698ed073092aaae4ad4eee635c883414fd086ce6a17601012d85863bcba411febcd4316173b2b675ef286e21ec087139d1157', 1, '2019-03-18 03:54:55.489707', '2019-03-18 03:54:55.489707'),
  (2, 'mmaihoang', '7f0d304cdc00d61f05d619168ad698ed073092aaae4ad4eee635c883414fd086ce6a17601012d85863bcba411febcd4316173b2b675ef286e21ec087139d1157', 2, '2019-03-18 03:54:55.489707', '2019-03-18 03:54:55.489707');

COMMIT;