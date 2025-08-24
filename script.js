let apiQuotes = [];
function newQuotes() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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