import React from "react";
import Image from "next/image";
import style from "@/styles/stylelogin.module.css"
import Link from "next/link";

const Login = () => {
  function handlelogin(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div className="w-80 lg:w-96">
    <div className="card border p-5">
      <div className={style.titlelogin}> Login </div>
      <p className="text-center text-md lg:text-xl">Silahkan Login terlebih dahulu</p>
      <br />
    {/* ------Form Inputan------ */}
      <form className="flex flex-col gap-5" onSubmit={handlelogin}>
        {/* ----Input Text*/}
        <input
          className={style.inputtext}
          type="text"
          placeholder="Email"
        />
        <input          
          className={style.inputtext}
          type="password"
          placeholder="Password"
        />
         {/* ----Input Text*/}

          {/* ----Login OAUTH------*/}
        <div className="flex flex-row gap-5 justify-center">
          <Image
            role="button"
            className={style.imggithub}
            width={50}
            height={51}
            src="/assets/github.png"
            alt={""}
          ></Image>
          <Image
           role="button"
            width={50}
            height={51}
            className={style.imggoogle}
            src="/assets/googlepng.png"
            alt={""}
          ></Image>
        </div>
         {/* ----Login OAUTH------*/}
        <div className="flex flex-col gap-5">
          <h2>Belum Punya Akun ? <Link href={"/register"} className="text-info font-bold hover:text-yellow-300">Sign Up</Link></h2>
          <button type="submit" className="btn btn-sm btn-info">
          proses
        </button>
        </div>
      </form>
       {/* ------Form Inputan------ */}
    </div>
    </div>
  );
};

export default Login;
