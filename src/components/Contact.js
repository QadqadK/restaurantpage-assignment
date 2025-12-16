const loadContact = () => {
  const content = document.getElementById("content");

  const p = document.createElement("p");
  p.textContent = "For more informtaion, kindly contact:"
  p.textContent = "📞 012-3456789";


  content.appendChild(p);
};

export default loadContact;
