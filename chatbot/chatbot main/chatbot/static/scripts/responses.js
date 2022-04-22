function getBotResponse(input) {
    //talking
    if (input == "How'S the day today?") {
        return "Today is a lovely day.";
    } else if (input == "How are you?") {
        return "I am good,Thankyou.";
    } else if (input == "hepl please.") {
        return "How can i help you.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}