import { c } from "../Data/lib";
import { getInput } from "../Data/lib";
import { Color } from "../Data/struct";

export function makeGuess(rules) {
  const guess = getInput("Make a guess !");
  if (guess.length != rules.size_of_word) {
    console.log(rules.list_of_rules[0]);
    return makeGuess(rules);
  } else if (guess.toUpperCase() != guess) {
    console.log(rules.list_of_rules[1]);
    return makeGuess(rules);
  } else {
    return guess;
  }
}

export function showResult(guessmap) {
  const answer: string[] = [];
  let i = 0;
  for (const key in guessmap) {
    i = 0;
    while (i < guessmap[key].position.length) {
      if (guessmap[key].color[i] == Color.Blue) {
        answer[guessmap[key].position[i]] = c.green(key);
      } else if (guessmap[key].color[i] == Color.Yellow) {
        answer[guessmap[key].position[i]] = c.yellow(key);
      } else {
        answer[guessmap[key].position[i]] = key;
      }
      i += 1;
    }
  }
  console.log(answer.join(""));
}
