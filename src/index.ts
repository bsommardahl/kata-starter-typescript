export function calc(_input: string): number {
  if (!_input) return 0;
  if (_input.length === 1) return parseInt(_input);
  const inputArr = _input.split(",").map(x=> parseInt(x));
  return inputArr.reduce((a,b) => a+b,0);
}
