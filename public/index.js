var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Biography"] = "Biography";
    Genre["ScienceFiction"] = "ScienceFiction";
    Genre["Fantasy"] = "Fantasy";
})(Genre || (Genre = {}));
function addBook(books, newBook) {
    books.push(newBook);
    return books;
}
function searchByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function updateAvailability(Books, title, available) {
    var updatedBooks = Books.map(function (book) {
        if (book.title === title) {
            return __assign(__assign({}, book), { available: available });
        }
        return book;
    });
    return updatedBooks;
}
function displayUserInfo(user) {
    if ("guestSessionId" in user) {
        console.log("Guest Session ID:", user.guestSessionId);
    }
    else {
        console.log("Profile:", user.profile);
    }
}
function updateUserProfile(user, updates) {
    if ("profile" in user) {
        return __assign(__assign({}, user), updates);
    }
    else {
        return user;
    }
}
