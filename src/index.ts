type Book = {
  title: string;
  author: string;
  publishedDate: Date;
  available: boolean;
  genre: string;
};
enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Biography = "Biography",
  ScienceFiction = "ScienceFiction",
  Fantasy = "Fantasy",
}

function addBook(books: Book[], newBook: Book): Book[] {
  books.push(newBook);
  return books;
}
function searchByGenre(books: Book[], genre: Genre): Book[] {
  return books.filter((book) => book.genre === genre);
}
function updateAvailability(
  Books: Book[],
  title: string,
  available: boolean
): Book[] {
  const updatedBooks = Books.map((book) => {
    if (book.title === title) {
      return { ...book, available };
    }
    return book;
  });
  return updatedBooks;
}
interface BaseUser {
  id: number;
  username: string;
  email: string;
}
interface GuestUser extends BaseUser {
  guestSessionId: string;
}

interface RegisteredUser extends BaseUser {
  profile: string;
  lastLogin: Date;
}
type User = GuestUser | RegisteredUser;
function displayUserInfo(user: User): void {
  if ("guestSessionId" in user) {
    console.log("Guest Session ID:", user.guestSessionId);
  } else {
    console.log("Profile:", user.profile);
  }
}
function updateUserProfile(
  user: User,
  updates: { profile?: string; lastLogin?: Date }
): User {
  if ("profile" in user) {
    return { ...user, ...updates };
  } else {
    return user;
  }
}
