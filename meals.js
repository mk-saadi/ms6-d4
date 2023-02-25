const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => displayMeals(res.meals));
};

const displayMeals = (meals) => {
  // console.log(meals);
  /*
     step 1: need a container element
     step 2: repeat hole "forEach"
     */
  const mealsContainer = document.getElementById("meals-container");

  //   >> this
  mealsContainer.innerText = "";

  // step *: loop through the meals array
  meals.forEach((meal) => {
    console.log(meal);
    // step 3: create child for each element
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("card");

    // step 4: set content of the child element
    mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                    Details
                </button>
            </div>
          </div>
          `;
    // step 5: append the child element to the container
    mealsContainer.appendChild(mealDiv);
  });
};

// # both of them are the same thing
// >> 1
// >> show food title in modal title
const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    // >> do not use";"
    .then((res) => res.json())
    // >> array er vitore object thakle "res.meals[0])"
    .then((res) => displayMealsDetail(res.meals[0]))
}

// >> 2
// >> async await 
// >> how professionals does it
const loadMealDetail2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMealsDetail(data.meals[0]);
  }
  catch (err) {
    console.log(err);
  }
};
// #

// >> show food title in modal title
const displayMealsDetail = (meal) => {
  document.getElementById("mealDetails").innerText = meal.strMeal;

  // >>this is the body
  const mealBody = document.getElementById("mealDetailsBody");
  mealBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">`;
};

// >> search by text
const searchMeals = () => {
  const searchText = document.getElementById("search-field").value;
  console.log(searchText);
  loadMeals(searchText);
};

loadMeals("fish");
