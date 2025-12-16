import backgroundpic from "../images/pic1.jpg";

const loadHome = () => {
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = backgroundpic;
  img.alt = "Restaurant";
  img.style.width = "100%";

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  content.appendChild(img);
  content.appendChild(p);
};

export default loadHome;