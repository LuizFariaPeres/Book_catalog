
import type { Book } from "../types/Book";
import { api } from "./api";

export const bookService = {
    getAll: async () =>{
        const res = await api.get<Book[]>("/")
        return res.data
    },
    create: async (book: Book)=>{
        const res = await api.post("/", book);
        return res.data
    },
    delete: async (id: string) =>{
        await api.delete(`/${id}`);
       
    }
}