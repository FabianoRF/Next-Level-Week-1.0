import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {//segundo parametro é a referencia
        table.increments('id').primary();//auto incremento e PK
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();//sting de tamanho maximo 2
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('points');
}