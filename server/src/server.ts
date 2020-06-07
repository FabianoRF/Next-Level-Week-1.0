import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import {errors} from 'celebrate'


const app =express();

app.use(cors(//deixando assim todas as urlsterão acesso a api, se colocar endereço delas ele limita
    
));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));//usado para arquivos estaticos no caso as imagens

app.use(errors());//lida com erros no front

app.listen(3333);