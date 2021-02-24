function boolChecker(bool) {
  if (typeof bool === "boolean") {
    console.log (typeof bool);
    return "You've given me a bool, thanks!";
  }
  console.log (typeof bool);
  return "No bool, not cool.";
}

console.log (boolChecker(false));