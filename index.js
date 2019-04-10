const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let champWon = record.find(championship => championship.result === "W")
  if (champWon) {
    return champWon.year
  } 
}