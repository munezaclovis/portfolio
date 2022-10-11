import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./routes";

function App() {
    return useRoutes(Routes);
}

export default App;
