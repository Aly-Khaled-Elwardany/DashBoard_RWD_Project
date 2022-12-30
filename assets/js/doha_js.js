function first(x) {
  x.addEventListener("blur", function () {
    if (!x.value) {
      x.classList.add("is-invalid");
    }
  });
}
