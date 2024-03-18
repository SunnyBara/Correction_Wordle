import { getRandomWord } from "../Data/lib";
import { game } from "../Game/wordle";
import { greeting, initRules, setRules, showRule } from "./init_func";
export function initWorlde() {
  const word = getRandomWord();
  const list_of_rules = setRules(word);
  const rules = initRules(6, list_of_rules, word);
  greeting();
  showRule(rules);
  game(word, rules);
}
