import React from "react";

function OrderProduct() {
  return (
    <div>
      <div className="flex ml-[25px] h-14 items-center">
        <h1 className="w-[49%] text-3xl text-slate-500">PRODUCT</h1>
        <h1 className="w-[17%] text-3xl text-slate-500">PRICE</h1>
        <h1 className="w-[17%] text-3xl text-slate-500">QUANTITY</h1>
        <h1 className="w-[17%] text-3xl text-slate-500">TOTAL</h1>
      </div>
      <hr className="bg-slate-300 h-[1px]" />
    </div>
  );
}

export default OrderProduct;
