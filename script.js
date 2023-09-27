// Récupération des différents éléments
const btnItem = document.querySelector("#btn");
const birthdayItem = document.querySelector("#birthday");
const resultItem = document.querySelector("#result");

// Déclaration de la fonction calculateAge qui va permettre de afficher l'âge
const calculateAge = () => {
  const birthdayValue = birthdayItem.value;

  if (birthdayValue === "") {
    alert("Entrez votre date de naissance s'il-vous-plait!");
    resultItem.textContent = "";
  } else {
    const age = getAge(birthdayValue); // Appel de la fonction getAge ayant pour paramètre birthdayValue
    resultItem.textContent = `Vous avez ${age} ${age > 1 ? "ans" : "an"}`;
  }
};

// Déclaration de la fonction getAge qui va permettre d'obtenir l'âge
const getAge = (birthdayValue) => {
  const currentDate = new Date();
  console.log(currentDate);
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
};

// Ecoute de l'événement click et appel de la fonction calculateAge
btnItem.addEventListener("click", calculateAge);
