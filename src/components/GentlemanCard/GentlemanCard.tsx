import Button from "../Button/Button";
import "./gentleman.css";
import { useState } from "react";
import React from "react";

export interface Gentleman {
  key: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
}

const GentlemanCard = (props: Gentleman): JSX.Element => {
  const [isHidden, setStyle] = useState(false);

  const hideGentleman = () => {
    setStyle(!isHidden);
  };

  return (
    <li className={`gentleman ${isHidden ? "non-displayed" : "displayed"}`}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={props.picture}
          alt={props.alternativeText}
        />
        <span className="gentleman__initial">
          {props.name[0].toUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{props.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {props.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {props.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {props.twitter}
          </li>
        </ul>
      </div>

      <i className="icon gentleman__icon fas fa-check"></i>

      <Button
        onClick={hideGentleman}
        buttonInnerElement={
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        }
      />
    </li>
  );
};

export default GentlemanCard;
