import {Request, Response} from 'express';
import knex from '../database/connection'

class ItemControler{
    async index(request:Request, response:Response){//lista itens
        const items= await knex('items').select('*');
    
        const serializedItems = items.map(item => {//trasnformando os items no que se deseja
            return {
                id: item.id,
                title: item.title,
                image_url: `http://10.0.3.106:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems)
    }
}

export default ItemControler;