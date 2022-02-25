const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 5;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);

  console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item); // Kicks off setInterval at about the same instance
});

/* 
 const increment = Math.ceil(value / 1000);
 just gives a more interesting value to increment by but you could increment by 1, etc. 
*/
