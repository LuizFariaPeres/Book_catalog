import type { Book } from "../types/Book";
import '../css/Item.css'
import React from "react";
import { bookService } from "../services/bookService";


// Define as propriedades que o componente receberá.
type Props = {

    // Objeto contendo as informações do livro.
    info: Book;

    // Função enviada pelo componente pai
    // para remover um livro da lista.
    onDelete: (id: string) => void;
}


// Componente responsável por exibir um livro individual.
export default function BookItem({ info, onDelete }: Props) {

    /**
     * Função responsável por excluir um livro.
     *
     * Primeiro remove o item da API
     * e depois atualiza a lista na interface.
     */
    async function handledelete() {

        // Verifica se o livro possui um ID válido.
        // Sem ele não é possível realizar a exclusão.
        if (!info._id) return;

        try {

            // Envia uma requisição DELETE para a API.
            await bookService.delete(info._id);

            // Informa ao componente pai que o item
            // deve ser removido do estado local.
            onDelete(info._id);

        } catch (error) {

            // Exibe erro caso a operação falhe.
            console.error(
                'Não foi possível excluir o item',
                error
            );
        }
    }

    /**
     * Estilo utilizado para livros não lidos.
     */
    const unreadStyle: React.CSSProperties = {
        color: '#8a0000'
    };

    /**
     * Estilo utilizado para livros já lidos.
     */
    const readStyle: React.CSSProperties = {
        color: '#146c03'
    };

    return (

        // Container principal do item.
        <div className="Item">

            {/* Título do livro */}
            <h2 className="Title">
                {info.title}
            </h2>

            {/* Área contendo autor e gênero */}
            <div className="BoxStr">

                <p>
                    <strong>Autor:</strong>
                    {" "}
                    {info.author}
                </p>

                <p>
                    <strong>Genero:</strong>
                    {" "}
                    {info.genre}
                </p>

            </div>

            {/* 
                Exibe "Lido" ou "Não Lido".
                Também altera a cor do texto:
                Verde = Lido
                Vermelho = Não Lido
            */}
            <p
                style={
                    info.read
                        ? readStyle
                        : unreadStyle
                }
            >
                {info.read
                    ? "Lido"
                    : "Não Lido"}
            </p>

            {/* 
                Botão que dispara a exclusão
                quando clicado.
            */}
            <button
                className="DeleteBtn"
                onClick={handledelete}
            >
                Delete
            </button>

        </div>
    );
}