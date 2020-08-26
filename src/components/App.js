import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import CardsPage from "./cards/CardsPage";
import PageNotFound from "../PageNotFound";
import Header from "./common/Header";
import "./App.css";
import Container from "../contextApi/Container";
import ThemeContext from "../contextApi/ThemeContext";
import {
  CityProvider,
  CityChanger,
  AnotherUseContextComponent,
} from "../useContext/CityProvider";
import { Card } from "../useContext/Card";
import { CustomHookUser } from "../customHooks/CustomHookUser";
import { ColorProvider } from "../customHooks/ColorProvider";
import { CustomHookUser2 } from "../customHooks/CustomHookUser2";
import BooksPage from "./allInOne/BooksPage";
import CreditCardPage from "./creditcard/CreditCardPage";

function App() {
  const [state, setState] = useState({ name: "Michael", theme: "light" });

  const switchTheme = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    setState({ ...state, theme: newTheme });
  };

  return (
    <div className={"container-fluid " + state.theme}>
      {/* will always render */}
      <Header />
      <button onClick={switchTheme}>{state.name} + Switch Theme</button>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/creditcards" component={CreditCardPage} />
        <Route component={PageNotFound} />
      </Switch>

      {/* <Container theme={theme} /> */}
      {/* OLD PROVIDER */}
      <ThemeContext.Provider value={state.theme}>
        <Container />
      </ThemeContext.Provider>

      {/* USECONTEXT */}
      <CityProvider>
        <CityChanger />
        <AnotherUseContextComponent />
        <Card />
      </CityProvider>

      {/* CUSTOM HOOKS */}
      <ColorProvider>
        <CustomHookUser />
        <CustomHookUser2 />
      </ColorProvider>
    </div>
  );
}

export default App;
