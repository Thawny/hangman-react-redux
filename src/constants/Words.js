export const WORDS = [
            "FACILE",
            "BONJOUR",
            "TRUC",
            "BOBINE",
            "INTUITION",
            "MACHIN",
            "CHALET"
        ]

export const pickRandomWord = () => {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}
