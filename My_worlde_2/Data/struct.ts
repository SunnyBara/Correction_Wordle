interface Rules {
  max_try: number;
  try_left: number;
  size_of_word: number;
  list_of_rules: string[];
}

interface PlayerGuessLetter {
  letter: string;
  color: Color;
}

enum Color {
  None = 0,
  Yellow = 1,
  Blue = 2,
}

export { Rules, PlayerGuessLetter, Color };
