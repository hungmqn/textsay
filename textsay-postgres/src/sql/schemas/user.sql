-- Table: "user"

-- DROP TABLE "user";
BEGIN TRANSACTION;

CREATE TABLE public."user"
(
    id serial PRIMARY KEY,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT user_username_key UNIQUE (username)
);

ALTER TABLE public."user"
    OWNER to sasm;

COMMIT;