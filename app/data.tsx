export async function getRandomFrontendQuote() {
  const quotes = [
      "Why did the developer go broke? Because he used up all his cache.",
      "Why do JavaScript developers wear glasses? Because they don't C#.",
      "How do you comfort a JavaScript bug? You console it.",
      "Why was the frontend developer always calm? Because he knew how to handle stress.",
      "Why did the CSS file never get lost? Because it always knew its class."
    ]
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export async function getRandomBackendQuote() {
    const quotes = [
      "Why do backend developers love nature? Because they prefer the backend of the forest.",
      "Why did the backend developer stay calm during the outage? Because he had a lot of REST.",
      "Why do backend developers hate the ocean? Too many server crashes.",
      "Why did the backend developer get promoted? He had a lot of cache.",
      "Why did the backend developer go to therapy? He had too many unresolved issues."
    ]
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}