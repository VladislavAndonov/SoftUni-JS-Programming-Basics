function circleAreaAndPer(input) {
  let r = Number(input[0]);
  let area = (Math.PI * r ** 2).toFixed(2);
  let perimeter = (2 * Math.PI * r).toFixed(2);

  console.log(area);
  console.log(perimeter);
}
circleAreaAndPer(["3"]);
