   
   const operando1 = document.getElementById("operando1");
   const operando2 = document.getElementById("operando2");
   const sumaBtn = document.getElementById("suma");
   const restaBtn = document.getElementById("resta");
   const multiplicacionBtn = document.getElementById("multiplicacion");
   const divisionBtn = document.getElementById("division");
   const resultadoOperacion = document.getElementById("resultado");

   
   sumaBtn.addEventListener("click", function() {
       const valor1 = parseFloat(operando1.value);
       const valor2 = parseFloat(operando2.value);
       const resultado = valor1 + valor2;
       resultadoOperacion.textContent = resultado;
   });

   restaBtn.addEventListener("click", function() {
       const valor1 = parseFloat(operando1.value);
       const valor2 = parseFloat(operando2.value);
       const resultado = valor1 - valor2;
       resultadoOperacion.textContent = resultado;
   });

   multiplicacionBtn.addEventListener("click", function() {
       const valor1 = parseFloat(operando1.value);
       const valor2 = parseFloat(operando2.value);
       const resultado = valor1 * valor2;
       resultadoOperacion.textContent = resultado;
   });

   divisionBtn.addEventListener("click", function() {
       const valor1 = parseFloat(operando1.value);
       const valor2 = parseFloat(operando2.value);
       if (valor2 !== 0) {
           const resultado = valor1 / valor2;
           resultadoOperacion.textContent = resultado;
       } else {
           resultadoOperacion.textContent = "Error: División por cero";
       }
   });