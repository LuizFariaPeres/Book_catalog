import { useState } from "react"
import type { Book } from "../types/Book"

type Props ={
    onCreated: (book: Book) => void
}

export default function BookForm({onCreated}: Props){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [read, setRead] = useState(false);

    const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onCreated({
            title,
            author,
            genre,
            read
        })
        setTitle('');
        setAuthor('');
        setGenre('');
        setRead(false);
    }

    return(
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="Fantasia">Fantasia</option>
                    <option value="Terror">Terror</option>
                    <option value="Misterio">Misterio</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Filosofia">Filosofia</option>
                </select>
                <label>Lido</label>
                <input type="checkbox" checked={read} onChange={(e)=> setRead(e.target.checked)}/>
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}