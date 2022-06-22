const themeChange = (tmemeselect) => {
  const link = document.querySelectorAll("link");
  console.log(link);
  if (tmemeselect === "theme1") {
    link[0].href = "./css/style.css";
  } else if (tmemeselect === "theme2") {
    link[0].href = "./css/theme1.css";
  } else if (tmemeselect === "theme3") {
    link[0].href = "./css/theme2.css";
  }
};
