import type { Book } from "../types/Book"
import '../css/Item.css'
import React from "react";

type Props ={
    info: Book;
    onDelete: (id: string) => void
}

export default function BookItem({info, onDelete}: Props){
    
    async function handledelete() {
       
        if(!info._id) return
        try{
            onDelete(info._id)
        }
        catch(error){
            console.error('Não foi possível excluir o item', error)
        }
    }

    const unreadStyle: React.CSSProperties ={
        color:'#8a0000'
    }
    const readStyle: React.CSSProperties ={
        color:'#146c03'
    }

    return(
        <div className="Item">
            <h2 className="Title">{info.title}</h2>
            <div className="BoxStr">
                <p><strong>Autor:</strong> {info.author}</p>
                <p><strong>Genero:</strong> {info.genre}</p>
            </div>
            <p style={info.read?readStyle:unreadStyle}>{info.read?"Lido": "Não Lido"}</p>
            <button className="DeleteBtn" onClick={handledelete}>Delete</button>
        </div>
    )
}