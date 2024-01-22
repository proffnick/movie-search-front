import React from "react";
import { MainAppContainer } from "./HOC/MainAppContainer";
import { SearchModule } from "./layouts/SeachModule";

export const MovieSearchModule = () => {

  return (
  <MainAppContainer>
    <SearchModule  />
  </MainAppContainer>);
}