import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import AppRouter from "./components/Router.js"

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <SearchForm />
    </main>
  );
}
