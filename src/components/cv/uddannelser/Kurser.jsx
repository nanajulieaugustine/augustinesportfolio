"use client";
import { useState } from "react";
import ListDotAndLine from "../ListDotAndLine";
import DescPopUp from "./DescPopUp";
const Kurser = ({ kursus }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="flex items-center gap-10 mt-20">
      <ListDotAndLine
        onClick={() => setShowPopup(!showPopup)}
        className={showPopup ? "bg-pink-700 " : ""}
      />
      <div>
        <div>
          <h3 className="pink-secondary capitalize">{kursus.kursus}</h3>
          <h4>{`Underviser: ${kursus.underviser}`}</h4>
          <p className="gray capitalize">{kursus.institution}</p>
        </div>
      </div>
      {showPopup && (
        <DescPopUp titel={kursus.kursus} beskrivelse={kursus.beskrivelse} />
      )}
    </section>
  );
};

export default Kurser;
