import { useState } from "react";

interface props{
	switchState: (arg0: boolean)=>void
}

export default function PianoButton({switchState}: props){
	const [isOn, setIsOn] = useState(false);

	let bgColor = isOn ? "bg-blue-500" : "bg-black"
	
	const handleClick = ()=>{
		setIsOn(!isOn);	
		switchState(isOn);
	}

	return(
		<button onClick={handleClick} className={`w-full h-8 ${bgColor} border border-white/50`}>
		</button>
	)
}
