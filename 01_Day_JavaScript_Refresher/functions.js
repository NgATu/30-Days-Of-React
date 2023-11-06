function solveQuadratic(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        return "The equation has infinite solutions.";
      } else {
        return "The equation has no solution.";
      }
    } else {
      return `The equation has one solution: ${-c / b}.`;
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      return "The equation has no solution.";
    } else if (delta === 0) {
      return `The equation has one solution: ${-b / (2 * a)}.`;
    } else {
      return `The equation has two solutions: ${
        (-b + Math.sqrt(delta)) / (2 * a)
      } and ${(-b - Math.sqrt(delta)) / (2 * a)}.`;
    }
  }
}

function showDateTime() {
  const now = new Date();
  return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}

function reverseArray(arr) {
  return arr.reverse();
}

function generateColors(colorType, numColor) {
  if (colorType === "hexa") {
    let colors = [];
    for (let i = 0; i < numColor; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 16).toString(16);
      }
      colors.push(color);
    }
    return colors;
  } else if (colorType === "rgb") {
    let colors = [];
    for (let i = 0; i < numColor; i++) {
      let color = "rgb(";
      for (let j = 0; j < 3; j++) {
        color += Math.floor(Math.random() * 256);
        if (j < 2) {
          color += ", ";
        }
      }
      color += ")";
      colors.push(color);
    }
    return colors;
  }
}
