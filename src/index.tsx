import * as React from "react";
import * as ReactDOM from "react-dom";

import { GameController } from "./controllers";

import { ControlPanel } from "./components/Controller";
import "./style.css";


const c = new GameController("http://localhost:6543");
const App = () => (
    <ControlPanel controller={c}/>
)

ReactDOM.render(<App />, document.getElementById("app"));
