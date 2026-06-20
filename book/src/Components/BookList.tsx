import type { Book } from "../types/Book"
import BookItem from "./BookItem"


type Props={
    list: Book[];
    onDelete: (id: string) =>void;
}

export default function BookList({list, onDelete}: Props){
    
    return(
        <div>   
            {list.map(item =>(<BookItem key={item._id} info={item} onDelete={onDelete}/>))}
        </div>
    )
}