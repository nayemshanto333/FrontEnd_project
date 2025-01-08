import React from "react";
import NavArea from "../NavArea";
import Footer from "../Footer";
import { themeColor } from "../lib/Utils";

const Warper = ({ children, isDark }) => {
  return (
    <div className={themeColor(isDark)}>
      <NavArea  isDark={isDark}/>
      {children}
      <Footer  isDark={isDark} />
    </div>
  );
};

export default Warper;
