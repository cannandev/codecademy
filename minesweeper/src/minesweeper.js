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
		if (randomRowIndex !== 'B') {
			board[randomRowIndex][randomColIndex] = 'B';
			numberOfBombsPlaced++;
		}
	}

	return board;
}

const getNumOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	let neighborOffsets = [];
	neighborOffsets.push([-1, -1], [-1, 0], [-1, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [1, 0]); // replace with nested for loop i/j
	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs = 0;

	neighborOffsets.forEach(offset => {
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColIndex = columnIndex + offset[1];
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColIndex >= 0 && neighborColIndex < numberOfColumns) {
			if (bombBoard[neighborRowIndex][neighborColIndex] !== 'B') {
				bombBoard[neighborRowIndex][neighborColIndex] = 'B';
				numberOfBombs++;
			}
		}
	});
	return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if (playerBoard[rowIndex][columnIndex] !== '') {
		console.log('This tile has already been flipped!');
	}
	else if (bombBoard[rowIndex][columnIndex] === 'B') {
		playerBoard[rowIndex][columnIndex] = 'B';
	}
	else {
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}
	return;
}

const printBoard = board => {
	return board.map(row => row.join(' | ')).join('\n');
}

let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,5);

// console.log('Player board:\n' + printBoard(playerBoard));
// console.log('Bomb board:\n' + printBoard(bombBoard));

// console.log(getNumOfNeighborBombs(bombBoard, 0, 2));

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ');
console.log(printBoard(playerBoard));
