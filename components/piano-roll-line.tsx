import PianoButton from "./piano-button"
const availableStyles = "bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-red-700 bg-red-800 bg-red-900"

interface props{
	beatsPerMeasure?: number,
	measureCount?: number,
	setSteps: (changeStep: string, index: number, isOn: boolean)=>void,
	note: string,
}

export default function PianoRollLine({beatsPerMeasure = 4, measureCount=4, setSteps, note}: props){
	console.log("PianoRollLine created")

	const getButtonCallbackFunction = (index: number) =>{
		return(
			(isOn:boolean)=>{
				const newStep = isOn ? "" : note;
				setSteps(newStep, index, isOn);
			}
		)
	}

	
	return(
		<div className={`grid grid-cols-4 w-full gap-2`}>
				{Array.from(
					{ length: measureCount},
					(_, measure_index) => (
						<span className={`grid grid-cols-4 gap-1 w-full`}>
							{Array.from(
								{ length: beatsPerMeasure},
								(_, beat_index) => (
									<PianoButton switchState={getButtonCallbackFunction((measure_index*4)+beat_index)}></PianoButton>
								)
							)}
							</span>
					)
				)}
				</div>
	)
}
