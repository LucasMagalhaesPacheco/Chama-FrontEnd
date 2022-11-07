import GlobalState from "./Global/GlobalState";
import Router from "./routes/Router";
import React from "react";

function App() {
  return (
    <GlobalState>
       <Router />
    </GlobalState>
  );
}

export default App;
