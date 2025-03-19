 const quotes = [
            { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
            { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
            { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
            { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
        ];

        document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('text').innerText = selectedQuote.quote;
    document.getElementById('author').innerText = "- " + selectedQuote.author;

    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${selectedQuote.quote}" - ${selectedQuote.author}`)}`;
    document.getElementById('tweet-quote').setAttribute('href', tweetURL);
});
