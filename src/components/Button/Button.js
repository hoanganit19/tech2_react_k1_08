import React from "react";
import "./Button.scss";
import button from "./Button.module.css";
import clsx from "clsx";
import ButtonInner from "./ButtonInner";

export default function Button() {
  return (
    <div className="wrapper">
      <button type="button" className={clsx("btn", button["btn-success"])}>
        Tech2 Solutions
      </button>

      <button type="button" className={clsx("btn", button["btn-success"])}>
        Tech2 Solutions
      </button>

      <ButtonInner />
    </div>
  );
}
