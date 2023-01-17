const form = document.querySelector(".form");

let miniaturas = sessionStorage.getItem('miniaturas') ? JSON.parse(sessionStorage.getItem("miniaturas")) : [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valuesForm = Object.values(form);
  console.log(valuesForm);

  const nuevaMiniatura = {};
  nuevaMiniatura.id = miniaturas.length + 1;
  valuesForm.forEach((valueInput) => {
    if (valueInput.id) {
      nuevaMiniatura[valueInput.id] = valueInput.value;
    }
  });
  console.log(nuevaMiniatura);

  for (const key in nuevaMiniatura) {
    const propertyMiniatura = nuevaMiniatura[key];

    if (!propertyMiniatura) {
      alert("No ha diligenciado todo el formulario")
      return
    }
  }

  miniaturas.push(nuevaMiniatura);
  sessionStorage.setItem("miniaturas", JSON.stringify(miniaturas));

  valuesForm.forEach(input => {
    if (input.id) {
      input.value = "";
    }
  })
  alert("Video agregado correctamente");
});

