import { initWorlde } from "../Init/init_wordle";

const read = require("readline-sync");
export function end() {
  if (read.keyInYN(`Play again ?\n`)) {
    console.clear();
    initWorlde();
  } else {
    console.log("Ok Good Bye !");
  }
  return;
}
