import axios from "axios";
let dataList = {};

export const fetchData = async () => {
  await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      dataList = res.data.drinks[0];
    })
    .catch((e) => console.log(e));
  return dataList;
};
export const dataCooktail = await fetchData();
