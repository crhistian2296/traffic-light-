import React, { useState } from "react";

import "../../styles/index.css"

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	
  return (
    <div className="traffic_light">
		<div className="body"></div>
		<div className={`light red ${color === 'r' && 'r'}`} onClick={() => setColor("r")} ></div>
		<div className={`light yellow ${color === 'y' && 'y'}`} onClick={() => setColor("y")} ></div>
		<div className={`light green ${color === 'g' && 'g'}`} onClick={() => setColor("g")} ></div>
	</div>
  );
};

export default Home;
