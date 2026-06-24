import { useState } from "react"
import type { Book } from "../types/Book"
import '../css/Form.css'

/**
 * Define as propriedades recebidas pelo componente.
 *
 * onCreated -> função enviada pelo componente App
 * que será chamada quando um novo livro for criado.
 */
type Props = {
    onCreated: (book: Book) => void
}

/**
 * Componente responsável pelo formulário
 * de cadastro de livros.
 */
export default function BookForm({ onCreated }: Props) {

    /**
     * Estados responsáveis por armazenar
     * os valores digitados pelo usuário.
     */

    // Título do livro
    const [title, setTitle] = useState('');

    // Autor do livro
    const [author, setAuthor] = useState('');

    // Gênero do livro
    const [genre, setGenre] = useState('Desconhecido');

    // Status de leitura
    const [read, setRead] = useState(false);

    /**
     * Função executada quando o formulário é enviado.
     *
     * Responsável por:
     * - impedir o recarregamento da página
     * - validar os campos
     * - criar o objeto Book
     * - enviar os dados para o componente pai
     * - limpar os campos
     */
    const handelSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        // Impede o comportamento padrão do formulário
        // (recarregar a página)
        e.preventDefault();

        /**
         * Validação simples:
         * verifica se algum campo obrigatório está vazio.
         */
        if (!title || !author || !genre) {

            alert('preencha os dados');

            return;
        }

        /**
         * Envia os dados para o componente pai.
         *
         * O componente App receberá esse objeto
         * através da função onCreated().
         */
        onCreated({
            title,
            author,
            genre,
            read
        });

        /**
         * Limpa todos os campos após o envio.
         */
        setTitle('');
        setAuthor('');
        setGenre('Desconhecido');
        setRead(false);
    }

    return (

        // Container principal do formulário
        <div className="FormConteiner">

            <h2>Formulario</h2>

            {/* Formulário */}
            <form onSubmit={handelSubmit}>

                {/* Campo título */}
                <label>Titulo</label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                {/* Campo autor */}
                <label>Autor</label>

                <input
                    type="text"
                    value={author}
                    onChange={(e) =>
                        setAuthor(e.target.value)
                    }
                />

                {/* Campo gênero */}
                <label>Generos</label>

                <select
                    value={genre}
                    onChange={(e) =>
                        setGenre(e.target.value)
                    }
                >

                    <option value={genre}>
                        Genero
                    </option>

                    <option value='Fantasia'>
                        Fantasia
                    </option>

                    <option value="Terror">
                        Terror
                    </option>

                    <option value="Misterio">
                        Misterio
                    </option>

                    <option value="Suspense">
                        Suspense
                    </option>

                    <option value="Filosofia">
                        Filosofia
                    </option>

                </select>

                {/* Checkbox de leitura */}
                <label>Lido</label>

                <input
                    type="checkbox"
                    checked={read}
                    onChange={(e) =>
                        setRead(e.target.checked)
                    }
                />

                {/* Botão de envio */}
                <button
                    className="FormBtn"
                    type="submit"
                >
                    Enviar
                </button>

            </form>

        </div>
    )
}