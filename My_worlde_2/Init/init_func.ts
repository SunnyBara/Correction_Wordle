import { off } from "process";
import { Color, Rules } from "../Data/struct";

export function parseWord(word: string) {
  let i = 0;
  let wordmap: [] = [];
  while (i < word.length && word[i]) {
    if (wordmap[word[i]]) {
      wordmap[word[i]].count += 1;
      wordmap[word[i]].position.push(i);
      wordmap[word[i]].color.push(Color.None);
    } else {
      wordmap[word[i]] = {
        count: 1,
        position: [i],
        color: [Color.None],
      };
    }
    i += 1;
  }
  return wordmap;
}

export function initRules(try_max, list_of_rule, word) {
  const rules: Rules = {
    try_left: try_max,
    max_try: try_max,
    size_of_word: word.length,
    list_of_rules: list_of_rule,
  };
  return rules;
}

export function setRules(word: string) {
  const list_of_rules: string[] = [];
  list_of_rules.push(`Word might have a length of ${word.length}`);
  list_of_rules.push("All letter might be in upper case");
  return list_of_rules;
}

export function showRule(rules) {
  for (rules of rules.list_of_rules) {
    console.log(rules);
  }
}

export function greeting() {
  console.log("Hello, let's play a guessing game !");
}
