const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");

const getMealList = () => {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        mealList.style.display = "grid";
        data.meals.map((meal) => {
          html += `
            <article class="searchResult" data-id="${meal.idMeal}">
            <img
              src="${meal.strMealThumb}"
              alt="food"
            />
            <strong>${meal.strMeal}</strong>
            <!-- <button>Get Recipe</button> -->
          </article>
            `;
        });
      } else {
        mealList.style.display = "block";
        html += `
        <p class="text-not-found">
        Sorry, we couldn't find any meals
        </p>
        `;
      }

      mealList.innerHTML = html;
    });
};

searchBtn.addEventListener("click", getMealList);
