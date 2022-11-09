import GlobalState from "./Global/GlobalState";
import Router from "./routes/Router";
import React from "react";
import { ToastContainer, toast } from 'react-toastify'
function App() {
  return (
    <GlobalState>
      <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      />
      <Router />
    </GlobalState>
  );
}

export default App;
