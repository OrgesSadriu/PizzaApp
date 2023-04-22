import React from "react";

function Location() {
  return (
    <div className="flex pt-24">
      <img
        className="w-96 h-96"
        src="https://images.pexels.com/photos/5903103/pexels-photo-5903103.jpeg?cs=srgb&dl=pexels-roman-odintsov-5903103.jpg&fm=jpg"
        alt=""
      />
      <div className="bg-gray-700 w-full h-96 gap-10 text-white flex flex-col">
        <div className="flex flex-col items-center pt-5">
          <p className="text-4xl font-bold ">
            Do good. Be nice. Order pizza. Repeat.
          </p>
          <p className="text-2xl font-normal">
            And, that's what we call the circle of life.
          </p>
        </div>
        <div className="flex gap-40 justify-center">
          <div className="flex flex-col gap-5">
            <p className="text-2xl text-yellow-400">FIND OUR RESTAURANTS</p>
            <div>
              <p>3815 Rr.12-Qershori #102.</p>
              <p>Ferizaj,70000</p>
              <p>(+383) 45-123-123</p>
            </div>
            <div>
              <p>3815 Rr.12-Qershori #102.</p>
              <p>Ferizaj,70000</p>
              <p>(+383) 45-123-123</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl text-yellow-400">WORKING HOURS</p>
            <div>
              <p>MONDAY TO THURSDAY</p>
              <p>9:00 - 24:00</p>
            </div>
            <div>
              <p>FRIDAY TO SUNDAY</p>
              <p>24 HOURS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
