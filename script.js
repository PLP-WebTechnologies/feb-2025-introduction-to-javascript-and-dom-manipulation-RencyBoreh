const ideas = [
  "Write a short story using only emojis! 📖😊🎉",
  "Draw something using only geometric shapes.",
  "Compose a melody using JavaScript’s Audio API.",
  "Invent a futuristic gadget and describe how it works.",
  "Design a new board game and outline the rules."
];

const quotes = [
  "Creativity is intelligence having fun. – Albert Einstein",
  "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
  "Every artist was first an amateur. – Ralph Waldo Emerson"
];

// Generate a random creative idea
document.getElementById("changeIdeaBtn").addEventListener("click", function() {
  let randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("text").textContent = randomIdea;
});

// Change background color dynamically
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
});

// Add a motivational quote
document.getElementById("addQuoteBtn").addEventListener("click", function() {
  let newQuote = document.createElement("p");
  newQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteContainer").appendChild(newQuote);
});
