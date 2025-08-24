import { Book } from "./bai6";
import { User } from "./bai7";

export class Library {
    private books: Book[] = [];
    private users: User[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.title}" added.`);
    }

    public addUser(user: User): void {
        this.users.push(user);
        console.log(`User "${user.name}" added.`);
    }

    public listBooks(): void {
        console.log("Books in library:");
        this.books.forEach(b => console.log(`- ${b.title} by ${b.author}`));
    }

    public listUsers(): void {
        console.log("Users in library:");
        this.users.forEach(u => console.log(`- ${u.name}`));
    }
}

