import * as React from "react";
import * as ReactDOM from "react-dom";

import { GameController } from "./controllers";

import { ControlPanel } from "./components/Controller";
import "./style.css";


let w = window as any;
const c = new GameController(w.crowdpong_globals.api_base);
const App = () => (
    <ControlPanel controller={c}/>
)

ReactDOM.render(<App />, document.getElementById("app"));
