FROM postgres

ADD /src/sql/schemas/ /docker-entrypoint-initdb.d/schemas/
ADD /src/sql/schemas.sql /docker-entrypoint-initdb.d/

ADD /src/sql/seeds/ /docker-entrypoint-initdb.d/seeds/
ADD /src/sql/seeds.sql /docker-entrypoint-initdb.d/