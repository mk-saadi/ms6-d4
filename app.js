// >> arrow function
const loadQuote= () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const blockquote = document.getElementById('quote')
    console.log(quote);
    blockquote.innerHTML = quote.quote
}

// >> this
loadQuote()