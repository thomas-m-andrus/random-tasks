/*
//If you need to recompile the dictionary
const addButtons = Array.from(document.getElementsByTagName("button")).filter(
  ({ innerText }) => innerText === "ADD TO CART"
);
let globalId;
mooOpenQtyWindow = (e, id, s, fn) => (globalId = id);
addButtons.map((button) => {
  button.onclick();
  const id = globalId;
  const name = button.ariaLabel.split("Add to cart the item ")[1];
  return { id, name };
});
*/

const dictionary = [
  {
    id: "Z2D4K65QB62BG",
    name: "Random-Assortment Dozen (No Nuts)",
  },
  {
    id: "ZSTZ94HAQQAFA",
    name: "Chocolate Long John",
  },
  {
    id: "4WJ3C63WM4E4R",
    name: "Vanilla Long John",
  },
  {
    id: "5BYHAKV1NE0H2",
    name: "Sprinkled Chocolate Long John",
  },
  {
    id: "2EZH07XCWRA62",
    name: "Sprinkled Vanilla Long John",
  },
  {
    id: "70F4T9Y6CYKPJ",
    name: "Carmel Long John",
  },
  {
    id: "65747HKHPDGAC",
    name: "Glazed Yeast",
  },
  {
    id: "8WMATFARH46AC",
    name: "Chocolate-Iced Yeast Ring",
  },
  {
    id: "31G9CZNWXSDPW",
    name: "Vanilla-Iced Yeast Ring",
  },
  {
    id: "RQ72VDNPFD1VA",
    name: "Marble-Iced Yeast Ring",
  },
  {
    id: "4PR9CRK0J288E",
    name: "Sugar Yeast Ring",
  },
  {
    id: "P9HKWRKSWHQGW",
    name: "Sprinkled Chocolate-Iced Yeast Ring",
  },
  {
    id: "6GM01GFQ0G9KT",
    name: "Sprinkled Vanilla-Iced Yeast Ring",
  },
  {
    id: "X7D9ACJZHK8T6",
    name: "Cinnamon Twist",
  },
  {
    id: "VQ32DJYPS4NY6",
    name: "Glazed Twist",
  },
  {
    id: "JEGEFEFH1ZFDA",
    name: "Glazed Jelly-Filled",
  },
  {
    id: "EZA8C8KC7RCMW",
    name: "Sugar Jelly-Filled",
  },
  {
    id: "5TM3HANSBWNBT",
    name: "Vanilla-Iced Jelly",
  },
  {
    id: "NNE40V1H7BMYT",
    name: "Chocolate-Iced Custard",
  },
  {
    id: "5W9KC7Z122600",
    name: "Vanilla-Iced Custard",
  },
  {
    id: "ZAHV8HV578S1P",
    name: "Powdered-Sugar Custard",
  },
  {
    id: "JH88PJRCN5N2E",
    name: "Glazed Lemon-Filled",
  },
  {
    id: "XGX73AXT8Y4EP",
    name: "Glazed French",
  },
  {
    id: "GSJT0TA0JV6VJ",
    name: "Chocolate-Iced French",
  },
  {
    id: "H7R0F8YK0RHEG",
    name: "Vanilla-Iced French",
  },
  {
    id: "70CZ1MRH5BKCE",
    name: "Old-Fashioned Buttermilk (Plain)",
  },
  {
    id: "SVHMYF6TQX0G6",
    name: "Old-Fashioned Buttermilk (Glazed)",
  },
  {
    id: "9DGZBAYZRMB6M",
    name: "Marble-Iced Cake",
  },
  {
    id: "JBEPV9M90MQSW",
    name: "Plain Cake",
  },
  {
    id: "NQ01AQ70V0G42",
    name: "Glazed Cake",
  },
  {
    id: "CB4BTQVKAWPB0",
    name: "Carmel-Iced Cake",
  },
  {
    id: "TCZTVADEF3788",
    name: "Blueberry Cake",
  },
  {
    id: "4GB7FS5XX1WMP",
    name: "Sprinkled Chocolate-Iced Cake",
  },
  {
    id: "9TX9H171SDP2T",
    name: "Vanilla-Iced Cake",
  },
  {
    id: "6402EQTD2QWJP",
    name: "Sprinkled Vanilla-Iced Cake",
  },
  {
    id: "V7FJN45RKK8V6",
    name: "Carmel Pecan Cake",
  },
  {
    id: "6HJ0V05ZDA9HG",
    name: "Chocolate-Iced Cake",
  },
  {
    id: "Y4A8PWC8EH0YC",
    name: "Glazed Chocolate Cake",
  },
  {
    id: "F965PBCCH0HA0",
    name: "Chocolate-Iced Chocolate Cake",
  },
  {
    id: "E1Q3HDNPAAYEA",
    name: "Cinnamon Powdered-Sugar Cake",
  },
  {
    id: "4NNGGN7DAAQ20",
    name: "Powdered-Sugar Cake",
  },
  {
    id: "2YSXEMZ3J2BNJ",
    name: "Glazed Red Velvet",
  },
  {
    id: "98N0KP5WRHY8T",
    name: "Red Velvet with Cream Cheese Icing",
  },
  {
    id: "0ZJY8ZPVPZ4HP",
    name: "Apple Fritter",
  },
  {
    id: "A220G0D0NDP24",
    name: "Bowtie",
  },
  {
    id: "AKCNYRQ4Y9N6M",
    name: "Carmel-Iced Cinnamon Swirl",
  },
  {
    id: "9E0BBYG0PQDBA",
    name: "Carmel-Pecan Cinnamon Swirl",
  },
  {
    id: "Q8WMDQZ8FYF7P",
    name: "Cinnamon Swirl",
  },
  {
    id: "15A5D6WEXBVT6",
    name: "Apple Tart",
  },
  {
    id: "GQK70Y5SFBR14",
    name: "Lemon Tart",
  },
  {
    id: "JSJ5CS960QJRM",
    name: "Chocolate-Iced Buttercream Tart",
  },
  {
    id: "1C4MNCJ1NCP1A",
    name: "Vanilla-Iced Buttercream Tart",
  },
  {
    id: "HEPEQHZXNS9JY",
    name: "Buttercream Tart",
  },
  {
    id: "A1D21SR6GK6N8",
    name: "Chocolate-Iced Cream-Cheese Tart",
  },
  {
    id: "8N4EEBVA1EXV6",
    name: "Vanilla-Iced Cherry Tart",
  },
  {
    id: "E501DCJEYR10P",
    name: "Vanilla-Iced Cream-Cheese Tart",
  },
  {
    id: "7EQB1K4F790TE",
    name: "One Dozen Glazed Yeast Holes",
  },
  {
    id: "DP6SQ3Y4SZTEJ",
    name: "One Dozen Chocolate Cake Holes",
  },
];
const addDonut = (donut, qty) => {
  const donutEntry = dictionary.find(({ name }) => name === donut);
  console.log(donutEntry);
  return fetch("https://donutdrivein.com/wp-json/moo-clover/v1/cart", {
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    referrer: "https://donutdrivein.com/store/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `item_uuid=${donutEntry.id}&item_qty=${qty}`,
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
};
const donutWants = [["Person 1", "Chocolate-Iced Chocolate Cake"]];
const printOrder = () => {
  donutWants.forEach(([person, donuts]) => {
    const donut = Array.isArray(donuts) ? donuts.join(", ") : donuts;
    console.log(`${person} - ${donut}`);
  });
};

let total = 0;

const rawOrders = donutWants.reduce((acc, [name, donuts]) => {
  const addToAcc = (id) => {
    if (acc.hasOwnProperty(id)) {
      acc[id] = acc[id] + 1;
    } else {
      acc[id] = 1;
    }
    total++;
  };
  if (Array.isArray(donuts)) {
    donuts.forEach((dName) => addToAcc(dName));
  } else {
    addToAcc(donuts);
  }
  return acc;
}, {});

Promise.all(
  Object.entries(rawOrders).map(([name, qty]) => addDonut(name, qty))
).then(() => {
  mooShowCart();
  printOrder();
  console.log(
    `\n\nThere should be ${total} donuts in total\n\n\n${Object.entries(
      rawOrders
    )
      .map(([name, number]) => `${name} - ${number}`)
      .join("\n\n")}`
  );
});
