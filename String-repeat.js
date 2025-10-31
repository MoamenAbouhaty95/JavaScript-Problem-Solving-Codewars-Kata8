function repeatStr(n, s) {
  let solution = "";
  for (let i = 0; i < n; i++) {
    solution += s;
  }
  return solution;
}
console.log(repeatStr(3, "Moamen")); // MoamenMoamenMoamen