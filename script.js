const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes =
    [];
function newQuotes() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.quote;
}

async function getQuotes() {
    const apiURL = 'https://luciferquotes.shadowdev.xyz/api/quotes/2000';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuotes();

    }
    catch (error) {

        // Catch Error
    }
}

getQuotes();