const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = arr => {
  const match = arr.find(i => i.result === 'W')
  return match ? match.year : match
}
