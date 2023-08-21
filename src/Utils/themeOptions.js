import React from "react";

const dark = {
  label: "Dark",
  background:
    "#2d3436 linear-gradient(315deg, #2d3436 0%, #000000 74%) no-repeat fixed center",
  textColor: "#fff",
  typeBoxText: "rgba(168, 168, 168)",
};

const light = {
  label: "Light",
  background:
    "#b8c6db linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%) no-repeat fixed center",
  textColor: "#000000",
  typeBoxText: "rgb(61, 26, 3)",
};

const blue = {
  label: "Blue",
  background:
    "#537895 linear-gradient(315deg, #537895 0%, #09203f 74%) no-repeat fixed center",
  textColor: "white",
  typeBoxText: "rgb(234, 222, 186)",
};

const green = {
  label: "Green",
  background:
    "#166d3b linear-gradient(147deg, #166d3b 0%, #000000 74%) no-repeat fixed center",
  textColor: "#D3D3D3",
  typeBoxText: "rgb(255, 255, 204)",
};

const pink = {
  label: "Pink",
  background:
    "#f9d1b7 linear-gradient(315deg, #f9d1b7 0%, #f894a4 74%) no-repeat fixed center",
  textColor: "#000000",
  typeBoxText: "rgb(51, 0, 26)",
};

const violet = {
  label: "Violet",
  background:
    "#9e8fb2 linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%) no-repeat fixed center",
  textColor: "#23297a ",
  typeBoxText: "rgb(72,61,139)",
};

const yellow = {
  label: "Yellow",
  background:
    "#fec84e linear-gradient(315deg, #fec84e 0%, #ffdea8 74%) no-repeat fixed center",
  textColor: "#000000",
  typeBoxText: "rgb(0, 32, 128)",
};

const orange = {
  label: "Orange",
  background:
    "#fbfbfb linear-gradient(315deg, #fbfbfb 0%, #f9886c 74%) no-repeat fixed center",
  textColor: "#004040",
  typeBoxText: "rgb(38,67,72)",
};

const red = {
  label: "Red",
  background:
    "#802201 linear-gradient(326deg, #802201 0%, #210d10 74%) no-repeat fixed center",
  textColor: "#fff",
  typeBoxText: "rgb(255, 179, 204)",
};

export const themeOptions = [
  { label: "Dark", value: dark },
  { label: "Light", value: light },
  { label: "Blue", value: blue },
  { label: "Green", value: green },
  { label: "Red", value: red },
  { label: "Pink", value: pink },
  { label: "Violet", value: violet },
  { label: "Yellow", value: yellow },
  { label: "Orange", value: orange },
];
