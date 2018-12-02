export const toggleShow = () => {
  this.setState((state) => ({ isVisable: !state.isVisable }));
};

// function to capitalize the first letter
export const capitalize = function(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Helper to flatten arrays
export const flattenArr = function(arr) {
  return [].concat(...arr);
};
export const randomizeArray = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr);
  return arr;
};
