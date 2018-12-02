import React, { Component } from "react";

const ThemePicker = (props) => {
  return (
    <div className="ThemePicker">
      <label htmlFor="ThemePicker">Select A Card Theme</label>
      <select name="ThemePicker" id="ThemePicker">
        {props.themes.map((theme) => {
          return <option value={theme}>{theme}</option>;
        })}
      </select>
    </div>
  );
};

export default ThemePicker;
