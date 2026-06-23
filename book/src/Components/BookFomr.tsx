import { useState } from "react"
import type { Book } from "../types/Book"
import '../css/Form.css'

type Props ={
    onCreated: (book: Book) => void
}

export default function BookForm({onCreated}: Props){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('Desconhecido');
    const [read, setRead] = useState(false);

    const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!title || ! author || !genre){
            alert('preencha os dados')
            return
        }
        onCreated({
            title,
            author,
            genre,
            read
        })
        setTitle('');
        setAuthor('');
        setGenre('Desconhecido');
        setRead(false);
    }

    return(
        <div className="FormConteiner">
            <h2>Formulario</h2>
            <form onSubmit={handelSubmit}>
                <label>Titulo</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Autor</label>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                <label>Generos</label>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value={genre}>Genero</option>
                    <option value='Fantasia'>Fantasia</option>
                    <option value="Terror">Terror</option>
                    <option value="Misterio">Misterio</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Filosofia">Filosofia</option>
                </select>
                <label>Lido</label>
                <input type="checkbox" checked={read} onChange={(e)=> setRead(e.target.checked)}/>
                <button className="FormBtn" type="submit">Enviar</button>
            </form>

        </div>
    )
}