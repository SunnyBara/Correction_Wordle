import { Rules } from "../Data/struct";
import { end } from "../End/end";
import { parseWord } from "../Init/init_func";
import { checkGame, findInWord, findMatch } from "./find_word";
import { makeGuess, showResult } from "./guess";

export function game(word: string, rules: Rules) {
  while (rules.try_left > 0) {
    console.log(`Try left : ${rules.try_left}`);
    const guess = makeGuess(rules);
    const guessmap = parseWord(guess);
    findInWord(guessmap, parseWord(word));
    showResult(guessmap);
    checkGame(guess, word, rules);
  }
  end();
}
