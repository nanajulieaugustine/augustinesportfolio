"use client";
import { useState } from "react";
import ListDotAndLine from "./ListDotAndLine";
import DescPopUp from "./DescPopUp";

const Uddannelser = ({ uddannelse }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section>
      {showPopup && (
        <DescPopUp
          titel={uddannelse.uddannelse}
          beskrivelse={uddannelse.beskrivelse}
        />
      )}

      <div className="group flex justify-end items-center gap-10">
        <div>
          <div className="text-right">
            <h3 className="pink-secondary capitalize">
              {uddannelse.uddannelse}
            </h3>
            <h4>{uddannelse.grad}</h4>
            <p className="gray capitalize">{uddannelse.institution}</p>
          </div>
        </div>

        <ListDotAndLine
          onClick={() => setShowPopup(!showPopup)}
          className={showPopup ? "bg-pink-700 " : ""}
        />
      </div>
    </section>
  );
};

export default Uddannelser;
