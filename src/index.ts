export function calc(_input: string): number {
  let delim = ",";
  if(_input.startsWith("//")){
    const parts = _input.split("\n");
    delim = parts[0].replace("//", "");
    _input = parts[1];
  }

  let numbers = _input.replace("\n", delim).split(delim).map(x=> Number(x));

  let negatives = numbers.filter(n => n < 0);
  if(negatives.length > 0)
    throw new Error("Negatives not allowed: " + negatives[0]);

  return numbers.reduce((sum, next) => sum + next, 0);
}
