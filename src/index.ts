export function calc(_input: string): number {
  let delim = ",";
  if(_input.startsWith("//")){
    const parts = _input.split("\n");
    delim = parts[0].replace("//", "");
    _input = parts[1];
  }

  let numbers = _input.replace("\n", delim).split(delim);
  return numbers.map(x=> Number(x)).reduce((sum, next) => sum + next, 0);
}
