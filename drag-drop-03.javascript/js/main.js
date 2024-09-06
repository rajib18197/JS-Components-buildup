"use strict";

const draggables = document.querySelectorAll("[data-draggable]");

const dragPreparation = function (e) {
  const target = e.target;
  const clone = target.cloneNode(true);
  const targetBox = target.getBoundingClientRect();
  target.style.opacity = 0;
  clone.style.position = "absolute";
  document.body.append(clone);
  clone.style.left = `${targetBox.left}px`;
  clone.style.top = `${targetBox.top}px`;
  clone.style.width = `${targetBox.width}px`;
  clone.style.height = `${targetBox.height}px`;
  clone.style.transform = `rotate(-5deg)`;

  clone.setPointerCapture(e.pointerId);

  clone.addEventListener("pointermove", dragging.bind(clone));
  clone.addEventListener("pointerup", dropped.bind({ clone, target }));
};

const dragging = function (e) {
  const clone = this;

  const cloneLeft = parseFloat(clone.style.left);
  const clonerTop = parseFloat(clone.style.top);
  // console.log(e.movementX, e.movementY);

  clone.style.left = `${cloneLeft + e.movementX}px`;
  clone.style.top = `${clonerTop + e.movementY}px`;
};

const dropped = function (e) {
  const { clone, target } = this;

  clone.releasePointerCapture(e.pointerId);
  const cloneLeft = parseFloat(clone.style.left);
  const clonerTop = parseFloat(clone.style.top);

  const droppedArea = document.elementFromPoint(cloneLeft, clonerTop);
  const dropzone = droppedArea.closest("[data-dropzone]");

  if (dropzone) {
    clone.style.transform = "";
    clone.remove();
    dropzone.append(target);
    target.style.opacity = 1;
  }

  // target.removeEventListener("pointerdown", dragPreparation);
};

draggables.forEach((draggable) => {
  draggable.addEventListener("pointerdown", dragPreparation);
});
