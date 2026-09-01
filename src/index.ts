export function calc(_input: string): number {
  if (!_input) return 0;
  if (_input.length === 1) return parseInt(_input);
  const inputArr = _input.split(",");
  return parseInt(inputArr[0]) + parseInt(inputArr[1]);
}
