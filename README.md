# express-template

Starter template for creating back-end web applications using [ Express.js | Node | Sequelize ORM | MySQL ].

## Environment Variables

To run this application you must:

-   Manually add the file .env in the projects ~/src/config/ directory, and populate the contents:

    -   .env
        -   PORT=\<express-listening-port>
        -   DB_HOST=\<database-domain>
        -   DB_PORT=\<database-port>
        -   DB_USR=\<database-user>
        -   DB_PWD=\<database-password>
        -   DB_NAME=\<database-name>
        -   DB_DIALECT=\<dialect-of-database>

-   Then install dependencies using:

    -   npm i

-   Then start the express server using:
    -   node .
