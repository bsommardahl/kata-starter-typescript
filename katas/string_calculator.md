## String Calculator Kata

https://osherove.com/tdd-kata-1

### What are we building?

Remember those Texas Instruments calculators from back in high school and college? We're going to build the logic that handles the calculation after the user hits the "equal" button. 

- When you think about the input before the "equal" button (with all the symbols and numbers), what data type would you say is the input that will go into the calculate function? (Answer: string)
- And after the calculation is complete, we ideally end up with what data type? (Answer: number) -- Maybe string, but that's what it becomes when it goes back out to the LCD screen, perhaps.

So, we will be building that function, but only for addition (sums). This new calculator function will be more innovative than those of the past. We will build in the ability to use OTHER symbols than just the "plus sign" (+). We will even give the user the ability to configure multiple custom symbols and multi-character symbols that could represent addition operations.

### Rules:
 
- Write one test at a time.
- Each test we write should fail for the right reasons BEFORE we implement the solution
- Once we have a test that is failing for the right reasons, the test is "locled". No modifications allowed to locked tests.
- When we implement, we should shoot for the simplest solution to make the failing test pass
- All previously passing specs must continue to pass (you break em, you fix em)
- All new specs must fail for the right reasons before making them pass (explain why)
- Always verbalize thoughts and code
- No copy/pasta
- No console.log's
- No Regex
- Yes google!! (on screen)

### Process:

1. Write spec
2. Red: Failing for the right reasons
3. Green: Just enough code to make it pass
4. Refactor: Can I improve the production code or spec without making any previously passing specs fail.
5. Repeat

### Specs

1. Given the user input is empty when calculating the sum then it should return zero.
2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1**_2_**3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[\*][%]\n1\*2%3” should return 6)

### Technique and Form

What do we want people to learn from the practice of this kata?

- Test-Driven Development
  - Plain English spec/observation naming
  - Top-down, right to left spec implementation
  - Defining classes, methods and new specs from the current spec
  - Modified Red-Green-Refactor (Red-Green-Red-Green-Red-Green-Red-Green-Red-Green-REFACTOR)
  - No automatically green specs
  - Failing for the right reason (explaining code path to failure)
- Pair Programming
  - Conversational coding
  - Ping pong pair programming pattern (p5)
- Mastery of Tools
  - Git SCM (Terminal)
    - Good commit messages
    - Push
    - Pull
    - Add
    - Commit
  - Jetbrains Rider
    - Automatically run specs on build
    - Panels and sub-windows don’t require excessive navigation/mousing
    - Refactorings/Keyboard shortcuts
      - Limited mouse use
      - Create type
      - Define field (type inference)
      - Move to folder
      - Navigate to failures
      - Basic editor navigation
      - Build
      - Run specs
      - Create variable after working out the value
      - Alt enter
  - Dotnet/C#
    - Default argument values
    - Basic string parsing
    - Extension methods
      - Select
      - Sum
    - Functional string/collection manipulation
    - Array vs IEnumerable
