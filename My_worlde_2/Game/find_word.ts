import { Color } from "../Data/struct";
import { looseGame } from "../End/loosegame";
import { winGame } from "../End/wingame";

export function spliceWord(splicer, word) {
  let cpt = 0;
  for (const index of splicer) {
    word.position.splice(index - cpt, 1);
    cpt++;
  }
  return word;
}

export function findPerfectMatch(guess: any, word: any) {
  let i = 0;
  const size = word.position.length;
  let j = 0;
  const splicer: number[] = [];
  while (j < guess.count) {
    i = 0;
    while (i < size) {
      if (guess.position[j] == word.position[i]) {
        guess.color[j] = Color.Blue;
        splicer.push(i);
        word.count -= 1;
      }
      i += 1;
    }
    j += 1;
  }
  spliceWord(splicer, word);
}
export function findMatch(guess: any, word: any) {
  if (word.count > 0) {
    let i = 0;
    const size = word.position.length;
    let j = 0;
    while (j < size) {
      i = 0;
      while (i < guess.count) {
        if (guess.color[i] == Color.None) {
          guess.color[i] = Color.Yellow;
          break;
        }
        i += 1;
      }
      j += 1;
    }
  }
}
export function findInWord(guessmap: Object[], wordmap: Object[]) {
  for (const key in wordmap) {
    if (guessmap[key]) {
      findPerfectMatch(guessmap[key], wordmap[key]);
      findMatch(guessmap[key], wordmap[key]);
    }
  }
}

export function checkGame(guess, word, rules) {
  rules.try_left -= 1;
  if (guess == word) {
    winGame(word);
    rules.try_left = 0;
  } else {
    if (rules.try_left == 0) {
      looseGame(word);
    }
  }
  return;
}
