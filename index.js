
// const superBowlWin = record.find(record => record.result === "W");

const superbowlWin = (record) => {
   if (record.find((dub) => dub.result === 'W')){
     return record.find((dub) => dub.result === 'W').year
   }
 }


// function superBowlWin() {
//    record.find(year);
// }
// const result = record.find(function(superBowlWin) {
//    return record.startsWith('W');
// });
