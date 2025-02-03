import React from "react";
import Image from "next/image";
import style from "@/styles/styleregister.module.css"
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = () => {

    function handlelogin(event: React.FormEvent<HTMLFormElement>): void {
        
    }

      return (
    <div className="w-80 lg:w-96">
    <div className="card border p-5">
      <div className={ style.titleregister}> Register </div>
      <p className="text-center text-md lg:text-xl">Silahkan Daftar </p>
      <br />
    {/* ------Form Inputan------ */}
      <form className="flex flex-col gap-5" onSubmit={handlelogin}>
        {/* ----Input Text*/}
        <label className={style.inputtext}>
        <MdEmail />
        <input       
          type="text"
          placeholder="Email"
        />
        </label>
        <label className={style.inputtext} >
        <RiLockPasswordLine />
        <input         
         type="password"
          placeholder="Password"
        />
        </label>
        <label  className={style.inputtext}>
        <RiLockPasswordLine />
         <input          
          type="password"
          placeholder="Confirm Password"
        />
        </label>
         {/* ----Input Text*/}

          {/* ----Login OAUTH------*/}
        <div className="flex flex-row gap-5 justify-center items-center">
            <div ><span>Login</span> menggunakan</div>
          <Image
            role="button"
            className={style.imggithub}
            width={30}
            height={30}
            src="/assets/github.png"
            alt={""}
          ></Image>
          <Image
           role="button"
            width={30}
            height={30}
            className={style.imggoogle}
            src="/assets/googlepng.png"
            alt={""}
          ></Image>
        </div>
         {/* ----Login OAUTH------*/}
        <div className="flex flex-col gap-5">
          <p>Sudah Punya Akun? <a href="/login" className="text-info font-semibold">Login</a></p>
          <button type="submit" className="btn btn-md btn-info">
          proses
        </button>
        </div>
      </form>
       {/* ------Form Inputan------ */}
    </div>
    </div>
  )
}

export default Register
