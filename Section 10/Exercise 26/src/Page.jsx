import Header from "./Header";
import React from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Page() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div id="app" className={theme === "dark" ? "dark" : "light"}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
