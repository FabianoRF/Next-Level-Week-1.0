import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),//onde vão parar os arquivos de upload
        filename(resquest, file, callBack){
            const hash= crypto.randomBytes(6).toString('hex');//cria uma hash que possui 6 bytes e converte em hexa

            const fileName = `${hash}-${file.originalname}`;//nome do arquivo

            callBack(null, fileName)//parametros 1_possivel erro, 2_ nome do arquivo
        }
    })
}