window.transformInput = (input) => {
  const label = input.parentElement.querySelector("label");
  label.style.transformOrigin = "bottom left";
  label.style.transform = "translate(1px, -95%) scale(0.8)";
  label.style.opacity = "1";
};

module.exports = { transformInput };
