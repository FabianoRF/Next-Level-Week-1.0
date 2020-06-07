import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

import {FiUpload} from 'react-icons/fi';
import './styles.css';


interface Props{//usada para criar propriedades dentro do componente que aceitam funcoes
    onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {//fala que é do tipo props e desestrutura a função
    

    const [selectedFileUrl, setSelectedFileUrl]= useState('');

    //Usadas no DropZOne
    const onDrop = useCallback(acceptedFiles => {
        const file= acceptedFiles[0];

        const fileUrl= URL.createObjectURL(file);
        setSelectedFileUrl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded])


    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
    <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" />

        {
            selectedFileUrl ? <img src={selectedFileUrl} alt="Point thumnail"></img>
                            : (
                                <p>
                                    <FiUpload/>
                                    Imagem do estabelecimento
                                </p>
                            )
        }

        
    </div>
    )
}

export default Dropzone;