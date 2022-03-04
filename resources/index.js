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