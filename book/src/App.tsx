import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import { bookService } from "./services/bookService";
import BookForm from "./Components/BookFomr";
import BookList from "./Components/BookList";
import './css/App.css'


export default function App() {

    // Estado que armazena todos os livros recebidos da API.
    // Inicialmente começa como um array vazio.
    const [list, setList] = useState<Book[]>([]);

    // Executa apenas uma vez quando o componente é montado.
    // O array vazio [] garante que a função não seja chamada
    // novamente em cada renderização.
    useEffect(() => {
        getBook();
    }, []);

    /**
     * Remove um livro da lista local.
     *
     * Recebe o ID do livro e atualiza o estado removendo
     * o item correspondente.
     */
    function removeItem(id: string) {
        try {

            // Percorre a lista atual e mantém apenas
            // os livros cujo ID seja diferente do ID recebido.
            setList(prev =>
                prev.filter(book => book._id !== id)
            );

        } catch (error) {

            console.error(
                "não foi possivel excluir o Livro",
                error
            );

            alert(`o item ${id} não foi excluido`);
        }
    }

    /**
     * Busca todos os livros cadastrados na API.
     *
     * O resultado é armazenado no estado "list".
     */
    async function getBook() {
        try {

            // Chama o método getAll() do serviço
            // para buscar todos os livros.
            const data = await bookService.getAll();

            // Atualiza o estado com os dados recebidos.
            setList(data);

        } catch (error) {

            console.error(
                'Não foi possivel exibir o livro',
                error
            );
        }
    }

    /**
     * Cria um novo livro.
     *
     * Recebe os dados do formulário,
     * envia para a API e adiciona o livro
     * retornado à lista atual.
     */
    async function createBook(book: Book) {
        try {

            // Envia o novo livro para a API.
            const newBook = await bookService.create(book);

            // Adiciona o livro recém-criado ao final da lista.
            setList(prev => [...prev, newBook]);

        } catch (error) {

            console.error(
                'Não foi possivel adicionar o livro!',
                error
            );
        }
    }

    // Estrutura visual do componente
    return (
        <div className="App">

            {/* Área responsável pelo formulário */}
            <div className="BookForm">

                {/* 
                    Passa a função createBook para o componente filho.
                    Quando um livro for criado no formulário,
                    essa função será executada.
                */}
                <BookForm onCreated={createBook} />

            </div>

            {/* Área responsável pela listagem */}
            <div className="BookList">

                {/*
                    list -> lista de livros

                    onDelete -> função que remove um livro da lista
                    quando o componente filho solicitar.
                */}
                <BookList
                    list={list}
                    onDelete={removeItem}
                />

            </div>
        </div>
    );
}