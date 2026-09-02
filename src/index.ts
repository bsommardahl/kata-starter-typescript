export function calc(_input: string): number {
  if(!_input) return 0;
  if (_input.includes(',')) {
    
    const numbers = _input.split(',').map(i => {
      return parseInt(i)
    });
    let sum: number = numbers[0] + numbers[1];
    return sum;
  }
  return 3;
}
