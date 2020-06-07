import knex from 'knex';
import path from 'path';//biblio do node que une caminhos

const connection = knex({//o client deve ser instalado
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault:true //flag que permite que tabela nulas sejam criadas
});

export default connection;