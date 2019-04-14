function superbowlWin(array) {
  const record = array.find(rec => rec.result == "W");
  if (record) {
    return record.year;
  } else {
    return undefined;
  }
}
