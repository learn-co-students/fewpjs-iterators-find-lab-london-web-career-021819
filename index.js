const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) { 
  const winner = array.find(object => object.result === "W")
  return winner ? winner.year : winner
}
