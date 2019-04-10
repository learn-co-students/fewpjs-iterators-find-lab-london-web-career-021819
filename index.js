const testVar = {};

function superbowlWin(array) {
   let year = array.find(obj => obj.result === "W");
   if (year) {
     return year.year;
   } else {
     return undefined;
   }
}
