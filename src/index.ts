export function calc(_input: string): number {
  if(!_input.includes(","))
    return Number(_input);
  
  let numbers = _input.split(",");
  return Number(numbers[0]) + Number(numbers[1]);
}
