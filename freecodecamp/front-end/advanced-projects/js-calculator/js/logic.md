# Javascript Algorithm Logic

## Rules
1. Every number should have a same class (dot included)
  a. zero (0) cannot be pressed more than one IF there aren't any number before it
  b. the dot (.) can only be pressed once between operators
  c. Digit limit: 8 digits. If pressed the number button more than this, it won't affect anything (doesn't restart)
  d. if the dot is pressed before anything else, append zero before it automatically
2. Every operator (+, -, x, /, =) need a same class too
  a. They can only be used after a number
  b. If only the dot is pressed before it, the operator won't affect anything
  c. It can be only used once
  d. If an operator is pressed twice, it will replace the old operator
  e. The equal operator won't appear in the process screen
  f. After the equal operator is pressed, the process restarts
  g. After anything else, the process keep continuing (e.g 9+3x5-3x2=ans, process screen restart after press another number)
  h, If any operator but the equal is pressed just after the equal, it will take the result as a new first input for the new operator.
    (e.g 3x2=6, (pressed +) -> 6+3 (if pressed 3 after +))
3. The clear buttons (AC and CE) do some clearings and need a class on their own
  a. CE -> clear last process. e.g (3x2 (CE) -> (goes back to) 3). If it's pressed after equal, all process is gone
  b. AC -> clear all on screen (process and result)
