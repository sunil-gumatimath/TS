function getDetails(kind: string | number) {
  if (typeof kind == "string") return `The ${kind} Details`;
  return `Order Details ${kind}`;
}

function serverMsg(msg?: string) {
  if (msg) return `Server running ${msg}`;
  return `server deafult `;
}

function orderCoffee(size: "small" | "medium" | "large" | number) {
  if (size === "small") return `small cup coffee`;
  if (size === "medium" || size === "large")
    return `coffee cup is either medium or large`;
  return `coffee order #${size}`;
}

class cappuccinoCoffee {
  serve() {
    return `serving Cappuccino Coffee`;
  }
}

class latteCoffee {
  serve() {
    return `serving latte  Coffee`;
  }
}

function serve(coffee: cappuccinoCoffee | latteCoffee) {
  if (coffee instanceof cappuccinoCoffee) return coffee.serve;

  if (coffee instanceof latteCoffee) return coffee.serve;
}

type coffeeOrder = {
  type: string;
  sugar: number;
};

function isCoffeeOrder(obj: unknown): obj is coffeeOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as unknown) === "string" &&
    typeof (obj as unknown) === "number"
  );
}

function serveOrder(item: coffeeOrder | string | unknown) {
  if (isCoffeeOrder(item))
    return `serving  ${item.type} coffee with ${item.sugar}`;
  return `serving custom coffee : ${item}`;
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;

    case "ginger":
      return `Ginger Chai`;
      break;

    case "elaichi":
      return `Elaichi Chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if (`spicelevel` in order) {
    //
  }
}

function isTringArray(arr: unknown): arr is string[] {}
