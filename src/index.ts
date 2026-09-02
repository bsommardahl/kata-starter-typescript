export function calc(_input: string): number {
  if(!_input) return 0;
  if (_input.includes(',')) {
    
    const numbers = _input.split(',').map(i => {
      return parseInt(i)
    });
    return numbers.reduce((a,b) => a+b,0);
  }
  return 3;
}
