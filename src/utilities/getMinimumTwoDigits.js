export default variable => {
  if (variable.toString().length > 1) return variable;
  return `0${variable}`;
};
