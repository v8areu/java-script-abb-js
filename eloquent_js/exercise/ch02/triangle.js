const triangleLength = 10;
const triangleBase = "#";

for (let i = 0; i < triangleLength; i++) {
  for (let j = 0; j < triangleLength; j++) {
    if (j <= i) {
      process.stdout.write(triangleBase);
    }
  }
  process.stdout.write("\n");
}
