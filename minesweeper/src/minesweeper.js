/**
 * Minesweeper v2. Arrays.
 */

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (let r = 0; r < numberOfRows; r++) {
		let row = [];
		for (let c = 0; c < numberOfColumns; c++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let r = 0; r < numberOfRows; r++) {
		let row = [];
		for (let c = 0; c < numberOfColumns; c++) {
			row.push(' ');
		}
		board.push(row);
	}

	let numberOfBombsPlaced = 0;
	/**
	 * An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. 
	 * This will be fixed when you learn about control flow.
	 */
	while (numberOfBombsPlaced < numberOfBombs) {
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;
}

const printBoard = board => {
	return board.map(row => row.join(' | ')).join('\n');
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player board: ');
console.log(printBoard(playerBoard));
console.log('Bomb board: ');
console.log(printBoard(bombBoard));

