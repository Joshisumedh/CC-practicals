const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar"
  ];
  
  document.getElementById("quoteBtn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = quotes[randomIndex];
  });
  