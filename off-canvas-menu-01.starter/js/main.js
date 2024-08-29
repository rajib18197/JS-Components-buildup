"use strict";

/*** Solution-01: Implemented by Complete DOM Manipulation Operations. No altering in CSS classes. **/

// const btnEl = document.querySelector("button");
// const offsiteContainerEl = document.querySelector(".offsite-container");
// const siteContainer = document.querySelector(".site-container");

// let offsiteOpen = false;

// const offsiteContainerInitialLeft =
//   offsiteContainerEl.getBoundingClientRect().left;

// const siteContainerInitialLeft = siteContainer.getBoundingClientRect().left;

// const toggleOffsiteContainer = function () {
//   if (offsiteOpen) {
//     offsiteContainerEl.style.left = `${offsiteContainerInitialLeft}px`;
//     siteContainer.style.transform = `translateX(${siteContainerInitialLeft}px)`;
//   } else {
//     offsiteContainerEl.style.left = `${siteContainerInitialLeft}px`;
//     siteContainer.style.transform = `translateX(${Math.abs(
//       offsiteContainerInitialLeft
//     )}px)`;
//   }
//   offsiteOpen = !offsiteOpen;
// };

// btnEl.addEventListener("click", toggleOffsiteContainer);

/***** Solution-02: Implemented by Toggling Classnames. No direct DOM Manipulation. ******/

const app = document.querySelector(".app");
const btnEl = document.querySelector("button");
const offsiteContainerEl = document.querySelector(".offsite-container");
const siteContainer = document.querySelector(".site-container");

let isOffsiteOpen = false;

const toggleOffsiteContainer = function () {
  // 1) Do it with typical class Manipulation
  //   if (app.classList.contains("offsite-is-open")) {
  //     app.classList.remove("offsite-is-open");
  //   } else {
  //     app.classList.add("offsite-is-open");
  //   }

  // 2) Do it with typical class Manipulation but in one-liner
  //   app.classList.toggle("offsite-is-open");

  //   3) Do it with state variable
  if (isOffsiteOpen) {
    app.classList.remove("offsite-is-open");
  } else {
    app.classList.add("offsite-is-open");
  }
  isOffsiteOpen = !isOffsiteOpen;
};

btnEl.addEventListener("click", toggleOffsiteContainer);
