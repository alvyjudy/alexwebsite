const createCartAction = (action, currentCart, updator) => {
  const futureCart =
    action === "addToCart" ?
        {}
      : action === "plusOne" ?
        {}
      : action === "minusOne" ?
        {}
      : action === "rmFromCart" ?
        {}
      : undefined;

  if (!dispatch) {
    throw Error "action not defined";
  }

  return ev => {
    updator(futureCart);
  };
}
