const array = process.argv.slice(2)
for (let num of array) {
  if (num >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  };
};