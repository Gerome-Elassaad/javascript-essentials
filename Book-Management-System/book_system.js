// Initialize an empty array to store books
let books = [];

// Function to add a book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
        };

        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to display the list of books
function showbooks() {
    const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Function to delete a book
function deletebook(index) {
    books.splice(index, 1); // Remove the book from the array
    showbooks(); // Refresh the book list
}

// Placeholder function for editing a book
function editbook(index) {
    alert(`Edit function for book at index ${index} is not implemented yet.`);
}