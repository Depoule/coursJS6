function getNumber() {
      // je declare que je vais chercher l'element "firstNumber" via l'Id et que je ne veut que la valeur, je stocke le tout dans firstNumber
      var firstNumber = document.getElementById('firstNumber').value;
      //  pareil pour secondNumber
      var secondNumber = document.getElementById('secondNumber').value;
      // avec modulo % j'affiche le reste de la division de mes deux nombres
      var result = firstNumber % secondNumber;

      alert(result);

}
