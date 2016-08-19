
export default function getPatternInfo(pattern = '', row = 0, col = 0) {
	const patternsMap = {
		Blinker: [ `${row},${col - 1}`, `${row},${col}`, `${row},${col + 1}` ],
		Toad: [
			`${row},${col - 1}`, `${row},${col}`, `${row},${col + 1}`,
			`${row + 1},${col}`, `${row + 1},${col + 1}`, `${row + 1},${col + 2}`,
		],
		Beacon: [
			`${row - 1},${col - 1}`, `${row - 1},${col}`,
			`${row},${col - 1}`,
			`${row + 1},${col + 2}`,
			`${row + 2},${col + 1}`, `${row + 2},${col + 2}`,
		],
		Pulsar: [
			`${row - 6},${col - 6}`, `${row - 6},${col - 5}`, `${row - 6},${col - 4}`, `${row - 6},${col}`, `${row - 6},${col + 1}`, `${row - 6},${col + 2}`,
			`${row - 4},${col - 8}`, `${row - 4},${col - 3}`, `${row - 4},${col - 1}`, `${row - 4},${col + 4}`, 
			`${row - 3},${col - 8}`, `${row - 3},${col - 3}`, `${row - 3},${col - 1}`, `${row - 3},${col + 4}`, 
			`${row - 2},${col - 8}`, `${row - 2},${col - 3}`, `${row - 2},${col - 1}`, `${row - 2},${col + 4}`, 
			`${row - 1},${col - 6}`, `${row - 1},${col - 5}`, `${row - 1},${col - 4}`, `${row - 1},${col}`, `${row - 1},${col + 1}`, `${row - 1},${col + 2}`,
			`${row + 1},${col - 6}`, `${row + 1},${col - 5}`, `${row + 1},${col - 4}`, `${row + 1},${col}`, `${row + 1},${col + 1}`, `${row + 1},${col + 2}`,
			`${row + 2},${col - 8}`, `${row + 2},${col - 3}`, `${row + 2},${col - 1}`, `${row + 2},${col + 4}`, 
			`${row + 3},${col - 8}`, `${row + 3},${col - 3}`, `${row + 3},${col - 1}`, `${row + 3},${col + 4}`, 
			`${row + 4},${col - 8}`, `${row + 4},${col - 3}`, `${row + 4},${col - 1}`, `${row + 4},${col + 4}`, 
			`${row + 6},${col - 6}`, `${row + 6},${col - 5}`, `${row + 6},${col - 4}`, `${row + 6},${col}`, `${row + 6},${col + 1}`, `${row + 6},${col + 2}`,
		],
		Pentadecathlon: [
			`${row - 1},${col - 2}`, `${row - 1},${col + 3}`,
			`${row},${col - 4}`, `${row},${col - 3}`, `${row},${col - 1}`, `${row},${col}`, `${row},${col + 1}`, `${row},${col + 2}`, `${row},${col + 4}`, `${row},${col + 5}`,
			`${row + 1},${col - 2}`, `${row + 1},${col + 3}`,
		],
		Glider: [
			`${row - 1},${col + 1}`, 
			`${row},${col - 1}`, `${row},${col + 1}`, 
			`${row + 1},${col}`, `${row + 1},${col + 1}`, 
		],
		"Lightweight Spaceship": [
			`${row - 1},${col - 1}`, `${row - 1},${col}`, `${row - 1},${col + 1}`, `${row - 1},${col + 2}`,
			`${row},${col - 2}`, `${row},${col + 2}`,
			`${row + 1},${col + 2}`,
			`${row + 2},${col - 2}`, `${row + 2},${col + 1}`, 
		],
		"The R-pentomino": [
			`${row - 1},${col}`, `${row - 1},${col + 1}`,
			`${row},${col - 1}`, `${row},${col}`,
			`${row + 1},${col}`,
		],
		Diehard: [
			`${row - 1},${col + 3}`, 
			`${row},${col - 2}`, `${row},${col - 3}`,
			`${row + 1},${col - 2}`, `${row + 1},${col + 2}`, `${row + 1},${col + 3}`, `${row + 1},${col + 4}`, 
		],
		Acorn: [
			`${row - 1},${col - 2}`, 
			`${row},${col}`, 
			`${row + 1},${col - 3}`, `${row + 1},${col - 2}`, `${row + 1},${col + 1}`, `${row + 1},${col + 2}`, `${row + 1},${col + 3}`, 
		],
		"Gosper Glider Gun": [
			`${row - 4},${col + 7}`,
			`${row - 3},${col + 5}`, `${row - 3},${col + 7}`, 
			`${row - 2},${col - 5}`, `${row - 2},${col - 4}`, `${row - 2},${col + 3}`, `${row - 2},${col + 4}`, `${row - 2},${col + 17}`, `${row - 2},${col + 18}`, 
			`${row - 1},${col - 6}`, `${row - 1},${col - 2}`, `${row - 1},${col + 3}`, `${row - 1},${col + 4}`, `${row - 1},${col + 17}`, `${row - 1},${col + 18}`, 
			`${row},${col - 17}`, `${row},${col - 16}`, `${row},${col - 7}`, `${row},${col - 1}`, `${row},${col + 3}`, `${row},${col + 4}`, 
			`${row + 1},${col - 17}`, `${row + 1},${col - 16}`, `${row + 1},${col - 7}`, `${row + 1},${col - 3}`, `${row + 1},${col - 1}`, `${row + 1},${col}`, `${row + 1},${col + 5}`, `${row + 1},${col + 7}`, 
			`${row + 2},${col - 7}`, `${row + 2},${col - 1}`, `${row + 2},${col + 7}`, 
			`${row + 3},${col - 6}`, `${row + 3},${col - 2}`, 
			`${row + 4},${col - 5}`, `${row + 4},${col - 4}`, 
		],
		"Indefinite Growth #1": [
			`${row - 4},${col + 3}`, 
			`${row - 3},${col + 1}`, `${row - 3},${col + 3}`, `${row - 3},${col + 4}`, 
			`${row - 2},${col + 1}`, `${row - 2},${col + 3}`, 
			`${row - 1},${col + 1}`, 
			`${row},${col - 1}`, 
			`${row + 1},${col - 3}`, `${row + 1},${col - 1}`, 
		],
		"Indefinite Growth #2": [
			`${row - 2},${col - 2}`, `${row - 2},${col - 1}`, `${row - 2},${col}`, `${row - 2},${col + 2}`, 
			`${row - 1},${col - 2}`, 
			`${row},${col + 1}`, `${row},${col + 2}`, 
			`${row + 1},${col - 1}`, `${row + 1},${col}`, `${row + 1},${col + 2}`, 
			`${row + 2},${col - 2}`, `${row + 2},${col}`, `${row + 2},${col + 2}`, 
		],
		"Indefinite Growth #3": [
			`${row},${col - 19}`, `${row},${col - 18}`, `${row},${col - 17}`, `${row},${col - 16}`, `${row},${col - 15}`, `${row},${col - 14}`, `${row},${col - 13}`, `${row},${col - 12}`, `${row},${col - 10}`, `${row},${col - 9}`, `${row},${col - 8}`, `${row},${col - 7}`, `${row},${col - 6}`, `${row},${col - 2}`, `${row},${col - 1}`, `${row},${col}`, `${row},${col + 7}`, `${row},${col + 8}`, `${row},${col + 9}`, `${row},${col + 10}`, `${row},${col + 11}`, `${row},${col + 12}`, `${row},${col + 13}`, `${row},${col + 15}`, `${row},${col + 16}`, `${row},${col + 17}`, `${row},${col + 18}`, `${row},${col + 19}`
		],
		"Pentadecathlon Maker": [
			`${row},${col - 5}`, `${row},${col - 4}`, `${row},${col - 3}`, `${row},${col - 2}`, `${row},${col - 1}`, `${row},${col}`, `${row},${col + 1}`, `${row},${col + 2}`, `${row},${col + 3}`, `${row},${col + 4}`, 
		],
		"Pulsar Maker": [
			`${row - 2},${col}`, 
			`${row - 1},${col - 1}`, `${row - 1},${col}`, `${row - 1},${col + 1}`, 
			`${row},${col - 1}`, `${row},${col + 1}`, 
			`${row + 1},${col - 1}`, `${row + 1},${col}`, `${row + 1},${col + 1}`, 
			`${row + 2},${col}`, 
		]
	};
	
	return pattern ? patternsMap[pattern] : Object.keys(patternsMap);
}