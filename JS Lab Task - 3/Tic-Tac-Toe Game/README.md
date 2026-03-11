1. Tic-Tac-Toe Game
    Practice DOM manipulation and event listeners by building an interactive game
 
2. Task Description
Create a browser-based Tic-Tac-Toe game where two players take turns marking cells on a 3x3 grid. The game should track the current player, detect win conditions, and display the game status.
 
3. HTML Structure Needed:
A 3x3 grid container with individual cells
A status display area showing current player or winner
A reset button to start a new game

4. JavaScript Functionality:
Game Initialization
Create the game board dynamically or select existing cells
Initialize game state (empty board, current player = 'X')
Add click event listeners to all cells
Gameplay Logic

5. When a cell is clicked:
Mark it with current player's symbol (X or O)
Prevent marking already filled cells
Check for win or draw after each move
Switch players if game continues
Win Detection
Check all possible winning combinations (rows, columns, diagonals)
Highlight winning cells when game is won
Display winner message
Draw Detection
Detect when all cells are filled with no winner
Display "It's a draw!" message
Reset Functionality
Clear all cells
Reset game state to beginning
Update status display
Challenges
Add a score counter for X and O wins
Add animation effects when marking cells