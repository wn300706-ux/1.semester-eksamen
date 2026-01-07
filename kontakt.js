console.log("JS virker faktisk");

const form =
  document.getElementById(
    "webform"
  ); /* Const finder kontakt formular via id i kontakt.html */
form.addEventListener("submit", function (event) {
  /* Checker på brugeren trykker send */ event.preventDefault(); /* Den stopper siden med at opdatere */
  alert(
    "Tak for at du kontaktede mig. Jeg vender tilbage til dig så hurtigt som muligt."
  ); /* Beskeden vises til brugeren */
  form.reset(); /* Resetter alt i kontakt formularen */
});
