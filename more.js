// ! more-api.html

const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((res) => displayUsers(res));
};

const displayUsers = (user) => {
  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.results[0].gender;

  const nameTag = document.getElementById("name");
  //   >> first name ebong last name eksathe pete hole
  nameTag.innerHTML =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;

    const pictureTag = document.getElementById("picture");
    pictureTag.innerHTML = user.results[0].picture.large;

    const locationTag = document.getElementById("location");
    locationTag.innerHTML = 
    user.results[0].location.country
    +", "+
    user.results[0].location.city
    +", "+
    user.results[0].location.postcode;

  console.log(user.results[0]);
};

// >> DO NOT FORGET TO CALL THE FUNCTION
loadUser();