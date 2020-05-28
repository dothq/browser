import * as ReactDOM from "react-dom";
import React from 'react';
import { App } from "./components/App";

import electron from 'electron';

const app = document.createElement("div")
app.id = "app"

document.body.appendChild(app)

electron.ipcRenderer.send('ignore-pointer-events') // temporary

ReactDOM.render(<App />, document.getElementById("app"))