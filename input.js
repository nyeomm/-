"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", ClickInput);

function ClickInput() {
  const container = document.querySelector(".container");
  const p = container.appendChild(document.createElement("p"));
  p.innerText = input.value;
  input.value = "";
}

// console.log(input);
