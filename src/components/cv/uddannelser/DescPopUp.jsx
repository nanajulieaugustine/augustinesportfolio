"use client";
const DescPopUp = ({ titel, beskrivelse }) => {
  return (
    <div className="bg-(--pink-accent) w-150 h-content rounded-4xl z-10 p-5 absolute lg:left-100 sm:left-10 shadow-2xl">
      <h2 className="white">{titel}</h2>
      <p>{beskrivelse}</p>
    </div>
  );
};

export default DescPopUp;
