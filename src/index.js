import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


//Utils
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Component
import App from "./App";

//Service Worker

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);