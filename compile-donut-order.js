/**
 *
 * !IMPORTANT: Make sure you wait till the page has loaded entirely
 * 
 * HOW TO USE:
 *
 * 1. Fill out the donutWants, it is an array of tuples,
 * the first index is the name of the individual (not really important),
 * the next index is either the single donut (a string) or multiple donuts
 * (an array of strings)
 *
 * 2. navigate to the donut drive in website: "https://donutdrivein.com/store/"
 *
 * !IMPORTANT: Don't click 'OK' when you get to the page, the program will do that for you
 *
 * 3. Open the console on the page
 *
 * 4. copy and paste the code into the console, click enter
 *
 * 5. Double check the list and checkout
 */

// Your donut list:
const donutWants = [
  ["person 1", "Chocolate-Iced Chocolate Cake"],
];

/**
 * RE-USABLE FUNCTIONS
 */
const printOrder = () => {
  donutWants.forEach(([person, donuts]) => {
    const donut = Array.isArray(donuts) ? donuts.join(", ") : donuts;
    console.log(`${person} - ${donut}`);
  });
};

const ariaLabel = (label) => `[aria-label="${label}"]`;

const ariaLabelForAddToCart = (donut) => `Add to cart the item ${donut}`;

const getDonut = (donut) =>
  document.querySelector(`${ariaLabel(ariaLabelForAddToCart(donut))}`);

const getButtons = () => Array.from(document.getElementsByTagName("button"));

const findByText =
  (label) =>
  ({ innerText }) =>
    innerText === label;

const setup = () => {
  let buttons = getButtons();

  const ok = buttons.find(findByText("OK"));
  ok.click();
  const showMore = document.querySelector(
    ariaLabel("show more items in the category Donuts")
  );
  showMore.click();
};

const order = (donut) => () => {
  const selectDonut = getDonut(donut);

  selectDonut.click();
  const addTheDonut = (resolve) => {
    console.log("Starting ", donut);
    let buttons = getButtons();

    const add = Array.from(buttons).find(findByText("Add"));
    add.click();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        buttons = getButtons();
        const ok = buttons.find(findByText("OK"));
        ok.click();
        console.log(`Made the order for: ${donut}`);
        resolve();
      }, 1000);
    }).then(() => {
      console.log(`I have now resolved: ${donut}`);
      resolve();
    });
  };
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      addTheDonut(resolve);
    }, 1000)
  );
};

/**
 * CREATE ALL THE ORDER FUNCTIONS
 */
const orders = donutWants.reduce((myOrders, [name, donuts]) => {
  if (Array.isArray(donuts)) {
    const newOrders = donuts.map((donut) => order(donut));
    return [...myOrders, ...newOrders];
  } else {
    return [...myOrders, order(donuts)];
  }
}, []);

/**
 * ACTUAL PROGRAM
 * 1. set up the conditions, close the model
 * 2. do the first order, increment the index,
 *    when the promise is resolved, if there are
 *    less
 */
setup();
let currentDonut = 0;
const stop = orders.length;
const nextOrder = (idx) => {
  if (idx < stop) return orders[idx]().then(() => nextOrder(idx + 1));
  console.log("Finished order!");
  printOrder();
};
setTimeout(() => {
  nextOrder(currentDonut);
}, 1000);
