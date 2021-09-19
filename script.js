const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteBtn = document.getElementById('new-quote');
//let apiQuotes =[];
//Show newQuote 
function newQuote(){
   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   //check if field is blanc and replace it
   if (!quote.author)
   {
    authorText.textContent = 'no author';
   }
   else{
    authorText.textContent =quote.author;
   }
//    check quote length 
if (quote.text.length > 50 )
{
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote');
}
    quoteText.textContent = quote.text;
 
   
}
// tweet button
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
}
// Getting quotes from API
/* async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        
        // handle error here
    }
} */
//Event Listeners
quoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
newQuote();
// when page starts 
//getQuotes();