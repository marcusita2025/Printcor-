import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: 20, fontFamily: "Arial" }}>
    <h1>Printcor Calculator</h1>
    <p>App pronto para cálculos de rolos para flexografia.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
