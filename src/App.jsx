import React from "react";
import css from '../src/index.css';
import Main from "components/Main";

export const App = () => {
  return (
    <div className={css.layout}> 
      <Main/>     
    </div>
  );
};
