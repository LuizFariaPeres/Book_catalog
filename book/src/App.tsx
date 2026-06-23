import { useEffect, useState } from "react";
import type {Book} from "./types/Book";
import { bookService } from "./services/bookService";
import BookForm from "./Components/BookFomr";
import BookList from "./Components/BookList";
import './css/App.css'



export default function App(){
    
    const [slot, setSlot] = useState<Book[]>([]);

    useEffect(()=>{
        getBook();
    }, [])

    function removeItem (id: string){
        try{
            setSlot(prev => prev.filter(book => book._id !== id))
        }catch(error){
            console.error("não foi possivel exlcuir o Livro", error)
            alert(`o item ${id} não foi excluido`)
        }
    }

    async function getBook(){
        try{
            const data = await bookService.getAll();
            setSlot(data)

        }catch(error){
            console.error('Não foi possivel exibir o livro', error)
        }
    }
    
    async function createBook(book: Book){
        try{
            const newBook = await bookService.create(book);
            setSlot(prev => [...prev, newBook])
        }catch(error){ console.error('Não foi possivel adicionar o livro!', error)}
    }

    return(
        <div className="App">
            <div className="BookForm">
                <BookForm  onCreated={createBook}/>
            </div>
            <div className="BookList">
                <BookList list={slot} onDelete={removeItem}/>
            </div>
        </div>
    )
}