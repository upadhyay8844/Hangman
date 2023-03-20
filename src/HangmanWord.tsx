type HangmanWordProps = {
  reveal?: boolean;
  wordToGuess: string;
  guessedLetters: string[];
};

export function HangmanWord({ reveal = false, wordToGuess, guessedLetters }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span style={{ borderBottom: ".1em solid black" }} key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
                  color : !guessedLetters.includes(letter)? "red":"green",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
