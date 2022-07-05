


const spinnerPositions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 100;

for (let positions = 0; positions < 3; positions++) {
  for (let i = 0; i < spinnerPositions.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerPositions[position])
    }, delay)
    delay += 200;
  }
}
