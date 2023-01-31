import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
