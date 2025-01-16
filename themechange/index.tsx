import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Home() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="min-h-screen">
      hello
      <button data-set-theme="" data-act-class="ACTIVECLASS">light</button>
      <button data-set-theme="dark" data-act-class="ACTIVECLASS">dark</button>
      <button data-set-theme="pink" data-act-class="ACTIVECLASS">pink</button>
    </div>
  );
}
