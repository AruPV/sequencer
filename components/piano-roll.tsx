import { get } from "http";
import PianoRollLine from "./piano-roll-line";

interface props{
	beatsPerMeasure?: number,
	measureCount?: number,
	setSteps: (changeStep: string, index: number, isOn: boolean)=>void,
}

function getNotes(totalOctaves: number, startingOctave: number): string[]{
	const baseNotes = ["c","d","e","f","g","a","b"]
	let returnNotes: string[] = [];
	for (var i = startingOctave; i < totalOctaves + startingOctave; i++){ 
		returnNotes.push(...(baseNotes.map((note)=> note + i)))
	}
	console.log(returnNotes)
	return returnNotes;
}

export default function PianoRoll({beatsPerMeasure = 4, measureCount=4, setSteps}: props){
	const notes = getNotes(2, 3)

	return(
		<>
		{notes.map(note=>{
			return <PianoRollLine beatsPerMeasure={beatsPerMeasure} measureCount={measureCount} setSteps={setSteps} note={note}/>
		})}
		</>
	)
}
