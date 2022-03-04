function ternaryOperatorExample() {
  let submittedAge = parseInt(document.getElementById('ternaryInput').value);
  if (isNaN(submittedAge)) {
    document.getElementById('ternaryOutput').value =
      'Укажите численное значение!';
  } else {
    document.getElementById('ternaryOutput').value =
      submittedAge < 18 ? 'no' : (submittedAge === 18 ? 'not sure' : 'yes');
  }
}

function recursionTest() {
  const sec = a => 1 + a;
  const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
  const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));
  const pwr = (a, b) => (b === 1) ? a : mpy(a, pwr(a, b - 1));

  console.log(pwr(2, 4));
}