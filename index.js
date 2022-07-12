const strictEquals = function (a, b) {
  console.log("hi");

  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, b)) {
    return true;
  }
  return "false";
};
console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "Oli"));
