const spinnerPositions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 100;

for (let cycle = 0; cycle < 2; cycle++) {
  for (let i = 0; i < spinnerPositions.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerPositions[i])
    }, delay)
    delay += 200;
  }
}