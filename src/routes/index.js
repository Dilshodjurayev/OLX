import React from "react";
import Auth from "./auth/Auth";
import Home from "./home/Home";
// import Category from "./category/Category";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Product from "./product/Product";
import Search from "./search/Search";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/search/:productName">
        <Search />
      </Route>
    </Switch>
  );
}

export default Routes;
