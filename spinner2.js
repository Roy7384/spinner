let time = 0;
let count = 0;
const spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   '];
while (time < 10000) {
  setTimeout(() => {
    process.stdout.write(spinner[(count++) % 3]);
  }, time += 200);
}