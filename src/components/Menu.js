const loadMenu = () => {
  const content = document.getElementById("content");

  const ul = document.createElement("ul");
  ["Nasi Lemak", "Chicken Chop", "Tomyam Seafood"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  content.appendChild(ul);
};

export default loadMenu;

