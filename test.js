let passed = 0
let failed = 0

const sameMoves = (actual, expected) => {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false
  }

  const actualSorted = actual.map(move => [...move]).sort()
  const expectedSorted = expected.map(move => [...move]).sort()

  return JSON.stringify(actualSorted) === JSON.stringify(expectedSorted)
}

const isMoveList = (moves) => Array.isArray(moves)

if (
  sameMoves(chessKingMoves(0, 1), [[0, 0], [0, 2], [1, 0], [1, 1], [1, 2]]) &&
  sameMoves(chessKingMoves(3, 3), [[2, 2], [2, 3], [2, 4], [3, 2], [3, 4], [4, 2], [4, 3], [4, 4]])
) {
  console.log('1. chessKingMoves: ✅')
  passed += 1
} else {
  console.log('1. chessKingMoves: ❌')
  failed += 1
}

const rookMovesFromCorner = chessRookMoves(0, 0)
const rookMovesFromCenter = chessRookMoves(4, 5)

if (
  isMoveList(rookMovesFromCorner) &&
  isMoveList(rookMovesFromCenter) &&
  rookMovesFromCorner.length === 14 &&
  sameMoves(rookMovesFromCorner, [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]]) &&
  rookMovesFromCenter.length === 14
) {
  console.log('2. chessRookMoves: ✅')
  passed += 1
} else {
  console.log('2. chessRookMoves: ❌')
  failed += 1
}

const bishopMovesFromCorner = chessBishopMoves(0, 0)
const bishopMovesFromCenter = chessBishopMoves(3, 3)

if (
  isMoveList(bishopMovesFromCorner) &&
  isMoveList(bishopMovesFromCenter) &&
  bishopMovesFromCorner.length === 7 &&
  sameMoves(bishopMovesFromCorner, [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]) &&
  bishopMovesFromCenter.length === 13
) {
  console.log('3. chessBishopMoves: ✅')
  passed += 1
} else {
  console.log('3. chessBishopMoves: ❌')
  failed += 1
}

console.log(`${passed}/${passed + failed}`)

const statusIcon = document.getElementById('status-icon')

if (statusIcon) {
  statusIcon.textContent = passed === 3 ? '👑' : '♟️'
}
