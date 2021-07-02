let nameCooktail = document.getElementById("name");
let category = document.getElementById("category");
let instruction = document.getElementById("instruction");
let img = document.getElementById("img");
let imgShow = document.getElementById("img-show");
let ingredients = document.getElementById("ingredients");
let dataList = {};
axios
  .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    dataList = res.data.drinks[0];
    nameCooktail.setAttribute("value", dataList.strDrink);
    category.setAttribute("value", dataList.strCategory);
    instruction.setAttribute("value", dataList.strInstructions);
    img.setAttribute("value", dataList.strDrinkThumb);
    imgShow.setAttribute("src", dataList.strDrinkThumb);
    let value = "";
    for (let i = 1; i < 16; i++) {
      if (dataList[`strIngredient${i}`] == null) {
        break;
      }
      value += `${dataList[`strIngredient${i}`]},`;
    }
    ingredients.setAttribute("value", value);
  })
  .catch((e) => console.log(e));
