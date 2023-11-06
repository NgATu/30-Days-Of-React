class Statistics {
  constructor(arr = []) {
    this.arr = arr;
  }

  count() {
    return this.arr.length;
  }

  sum() {
    return this.arr.reduce((a, b) => a + b);
  }

  min() {
    return Math.min(...this.arr);
  }

  max() {
    return Math.max(...this.arr);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    let arr = this.arr.sort();
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid] + arr[mid - 1]) / 2;
    } else {
      return arr[mid];
    }
  }

  mode() {
    let arr = this.arr.sort();
    let count = 0;
    let maxCount = 0;
    let mode = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        count++;
      } else {
        count = 1;
      }
      if (count > maxCount) {
        maxCount = count;
        mode = arr[i];
      }
    }
    return `(${mode}, ${maxCount})`;
  }

  var() {
    let mean = this.mean();
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += Math.pow(this.arr[i] - mean, 2);
    }
    return sum / this.arr.length;
  }

  std() {
    return Math.sqrt(this.var());
  }

  describe() {
    console.log(`Count: ${this.count()}`);
    console.log(`Sum: ${this.sum()}`);
    console.log(`Min: ${this.min()}`);
    console.log(`Max: ${this.max()}`);
    console.log(`Range: ${this.range()}`);
    console.log(`Mean: ${this.mean()}`);
    console.log(`Median: ${this.median()}`);
    console.log(`Mode: ${this.mode()}`);
    console.log(`Variance: ${this.var()}`);
    console.log(`Standard Deviation: ${this.std()}`);
  }
}

let statistics = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);
statistics.describe();
