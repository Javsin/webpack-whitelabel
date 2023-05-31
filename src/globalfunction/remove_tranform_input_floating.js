const removeTransformInput = (input) => {
  const label = input.parentElement.querySelector("label");
  label.style.transform = "";
  label.style.transformOrigin = "";
  label.style.opacity = "";
};

module.exports = { removeTransformInput };
