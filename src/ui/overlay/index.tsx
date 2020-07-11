import * as ReactDOM from "react-dom";
import React from 'react';
import { App } from "./components/App";

const app = document.createElement("div")
app.id = "app"

document.body.appendChild(app)

ReactDOM.render(<App />, document.getElementById("app"))