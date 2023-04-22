import React from "react";
function Orders({ price, quantity, title, image, formData, cart, mediumSize }) {
  let tot = price * quantity;
  let total = tot.toFixed(2);

  function something(event) {
    if (formData.small == true) {
      return <span>Small</span>;
    } else if (formData.medium == true) {
      return <span>Medium</span>;
    } else if (formData.large == true) {
      return <span>Large</span>;
    } else {
      return <span>Medium</span>;
    }
  }
  // ni if qe nese esht small me ba price-in props.smallPrice
  return (
    <div>
      <div className="flex ml-[25px] h-36 items-center">
        <div className="w-[49%] flex text-2xl items-center gap-8">
          <img src={image} alt="" className="w-32 h-32" />
          <div>
            <h1 className="font-semibold text-3xl text-red-600">{title}</h1>
            <p className="text-lg font-bold text-slate-500">
              Size: <span className="font-normal">{something()}</span>
            </p>
          </div>
        </div>
        <div className="w-[17%] text-2xl font-semibold">${price}</div>
        <div className="w-[17%] text-2xl font-semibold">{quantity}</div>
        <div className="w-[17%] text-2xl font-bold">${total}</div>
      </div>
      <hr />
    </div>
  );
}

export default Orders;
