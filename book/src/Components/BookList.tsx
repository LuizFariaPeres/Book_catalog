// Importa a tipagem Book.
// Ela define quais propriedades um livro deve possuir.
import type { Book } from "../types/Book"

// Importa o componente responsável por exibir um único livro.
import BookItem from "./BookItem"

// Importa os estilos CSS da lista.
import '../css/List.css'


/**
 * Define as propriedades recebidas pelo componente.
 *
 * list -> array contendo todos os livros.
 * onDelete -> função responsável por remover um livro.
 */
type Props = {
    list: Book[];
    onDelete: (id: string) => void;
}

/**
 * Componente responsável por renderizar
 * todos os livros cadastrados.
 */
export default function BookList({ list, onDelete }: Props) {

    return (

        // Container principal da lista
        <div className="List">

            {
                // Percorre todos os livros do array "list"
                // e cria um componente BookItem para cada um.
                list.map(item => (

                    <BookItem

                        // Chave única utilizada pelo React para
                        // identificar cada elemento da lista.
                        key={item._id}

                        // Envia os dados do livro para o componente.
                        info={item}

                        // Envia a função de exclusão para o componente.
                        onDelete={onDelete}

                    />

                ))
            }

        </div>
    )
}