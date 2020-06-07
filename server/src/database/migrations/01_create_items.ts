import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('items', table => {//segundo parametro é a referencia
        table.increments('id').primary();//auto incremento e PK
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}