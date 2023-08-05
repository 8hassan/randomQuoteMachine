const quotesArray = [
    { name: "Albert Einstein", quote: "Strive not to be a success, but rather to be of value." },
    { name: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower." },
    { name: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { name: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { name: "Mark Twain", quote: "The secret of getting ahead is getting started." },
    { name: "Thomas Edison", quote: "I have not failed. I've just found 10,000 ways that won't work." },
    { name: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { name: "Abraham Lincoln", quote: "In the end, it's not the years in your life that count. It's the life in your years." },
    { name: "Martin Luther King Jr.", quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." },
    { name: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." }
];

const currentQuote = document.querySelector("#quote");
const quoteTeller = document.querySelector("#person");
const btn = document.querySelector("button");

function changeQuote(){
    let random = Math.floor(Math.random() * (quotesArray.length - 1));
    currentQuote.innerText = quotesArray[random].quote;
    person.innerText = quotesArray[random].name;
}

btn.addEventListener("click", changeQuote);