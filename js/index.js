const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  if (Object.is(a, b)) {
    return true;
  }
  if (
    (Object.is(a, null) && !Object.is(b, null)) ||
    (!Object.is(a, null) && Object.is(b, null))
  ) {
    return false;
  }
  if (!a && !b) {
    return true;
  }
  return false;
};

export default strictEquals;
