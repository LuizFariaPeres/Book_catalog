import type { Book } from "../types/Book"
import { bookService } from "../services/bookService"

type Props ={
    info: Book;
    onDelete: (id: string) => void
}

export default function BookItem({info}: Props){
    
    async function handledelete() {
        if(!info._id) return
        try{
            await bookService.delete(info._id)
        }catch(error){
            console.error('Não foi possível excluir o item', error)
        }
    }

    return(
        <div>
                <h1>{info.title}</h1>
                <div>
                    <p>{info.author}</p>
                    <p>{info.genre}</p>
                </div>
                <p>{info.read}</p>
                <button onClick={handledelete}>Delete</button>
        </div>
    )
}