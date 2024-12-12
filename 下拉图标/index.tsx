import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const SvgFold = function () {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <h2 onClick={handleClick}>
        点击显示内容
        <span>
          <svg viewBox="0 0 30 30" width="15" height="15" fill="none">
            <path
              class="icon"
              d={show ? "M0 20 l15 -15 15 15" : "M0 10 l15 15 15 -15"}
              stroke="#3973e6"
              stroke-width="3"
            />
          </svg>
        </span>
      </h2>
      <div className={`content ${show ? "active" : ""}`}>
        <p>
          MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips and
          is built for Apple Intelligence, coming in beta this fall.3 Featuring
          3‑nanometer technology and an all‑new GPU architecture, they’re the
          most advanced chips ever built for a personal computer. And each one
          brings more pro performance and capability.
        </p>
      </div>
    </div>
  );
};

export default memo(SvgFold);

// .content{
//   width: 300px;
//   display: grid;
//   grid-template-rows: 0fr;
//   overflow: hidden;
//   transition: all ease-out 0.2s;
// }
// .content p{
//   min-height: 0px;
// }
// .active{
//   grid-template-rows: 1fr;
// }
// .icon{
//   transition: all ease-out 0.2s;
// }
// *{
//   margin: 0;
//   padding: 0;
// }
// .container{
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// }
// .container h2{
//   color: #3973e6;
//   cursor: pointer;
// }
// .container h2 span{
//   margin-left: 8px;
// }