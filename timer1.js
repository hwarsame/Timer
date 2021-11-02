const array = process.argv.slice(2);
Number(array);
for (let char of array) {
  if (char >= 0) {
    setTimeout(() => process.stdout.write('\x07'), char * 1000);
  }
}




