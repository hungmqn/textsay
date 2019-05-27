There are two ways to have new database fully set up

## Option 1:
1/ Use image on docker-compose.yml.
2/ cd ./postgres
3/ npm run migrate
4/ npm run seed
## Option 2:
1/ Use build on docker-compose.yml
2/ docker-compose up
This will automatically run sql files in src/sql folder that create schemas and seed data

### Refresh data:

Option 1 doesn't not require restarting container, just use:
npm run migrate:undo
npm run migrate
npm run seed
This is best option for built container or production run.

Option 2 requires restarting container, which is best on newly start.
