import { useLayoutEffect, useRef, useState } from "react";

/*** Solution-01: Implemented by Complete DOM Manipulation Operations. No altering in CSS classes. **/
export default function OffCanvasMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const offsetContainerRef = useRef();
  const siteContainerRef = useRef();
  const offsetContainerInitialLeft = useRef();
  const siteContainerInitialLeft = useRef();

  useLayoutEffect(() => {
    offsetContainerInitialLeft.current =
      offsetContainerRef.current.getBoundingClientRect().left;
    siteContainerInitialLeft.current =
      siteContainerRef.current.getBoundingClientRect().left;
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      offsetContainerRef.current.style.left = `${offsetContainerInitialLeft.current}px`;
      siteContainerRef.current.transform = `translateX(${siteContainerInitialLeft.current}px)`;
    } else {
      offsetContainerRef.current.style.left = `${siteContainerInitialLeft.current}px`;
      siteContainerRef.current.transform = `translateX(${
        offsetContainerInitialLeft.current * -1
      }px)`;
    }
  }, [isOpen]);

  return (
    <div className="app">
      <div className="offsite-container" ref={offsetContainerRef}>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="site-container" ref={siteContainerRef}>
        <h1>Click the button to open the sidebar!</h1>
        <button onClick={() => setIsOpen((open) => !open)}>
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}

/***** Solution-02: Implemented by Toggling Classnames. No direct DOM Manipulation. ******/

// export default function OffCanvasMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`app ${isOpen ? "offsite-is-open" : ""}`}>
//       <div className="offsite-container">
//         <nav className="nav">
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Work</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <div className="site-container">
//         <h1>Click the button to open the sidebar!</h1>
//         <button onClick={() => setIsOpen((open) => !open)}>
//           <span>Menu</span>
//         </button>
//       </div>
//     </div>
//   );
// }
