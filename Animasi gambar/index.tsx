import style from "@/styles/style.module.css";
import React, { useRef } from "react";

const index = () => {

  const refmodal= useRef<HTMLDialogElement>(null)
  function handlemodal(): void {
  if(refmodal.current){
    refmodal.current.showModal()
  }
  }

  return (
    <div className="flex flex-col justify-center min-h-screen items-center gap-10 ">
      <img width={100} className={style.imgball} src="../ball.png" alt="" />

      <div className="flex justify-center">
        <details className="collapse bg-base-200 ">
          <summary className="collapse-title">
            <img width={100} className="" src="../ball.png" alt="" />
          </summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
      </div>

      <div>
        <img
          role="button"          
          onClick={handlemodal}
          width={100}
          src="../ball.png"
          alt=""
        />
        <dialog ref={refmodal} id="my_modal_2" className="modal">
        
          <div className="modal-box">
            <img src="../ball.png" alt="" />
            Ini adalah gambar
            <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              
              <button className="btn">Close</button>
            </form>
          </div>
          </div>
          
        </dialog>
      </div>

      <div>
        <button className={style.btn1}>klik</button>
      </div>
    </div>
  );
};

export default index;
