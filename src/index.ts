export function calc(_input: string): number {
  if(!_input.includes(","))
    return Number(_input);
  
  let numbers = _input.split(",");
  return numbers.map(x=> Number(x)).reduce((sum, next) => sum + next, 0);
}
