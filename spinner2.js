const spinnerPositions = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

  for (let i of spinnerPositions) {
    setTimeout(() => {
      process.stdout.write('\r' + i + "   ")
    }, delay)
    delay += 200;
  }

  