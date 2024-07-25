'use client'
import { useRef, useState } from "react";
import { Song, Track, Instrument} from "reactronica";
import PianoRoll from "./piano-roll";


export default function Sequencer(){
	const beatsPerMeasure = 4;
	const measureCount = 4;
	const [isPlaying, setIsPlaying] = useState(false);
	console.log("Sequencer Loaded");
	const initialSteps = Array(beatsPerMeasure*measureCount).fill([]);
	const [steps, setSteps] = useState(initialSteps);
	(initialSteps);
	const [bpm, setBpm] = useState(140);

	const pianoRollCallbackFunction = (changeStep: string, index: number, isOn: boolean) =>{
		console.log(changeStep)
		console.log(isOn)
		const newArray = steps.map((originalSteps, i)=>{
			if (i !== index) return originalSteps
			else if (isOn) return originalSteps.filter((step: string)=> step === changeStep)
			else return [...originalSteps, changeStep]
		});
		setSteps(newArray)
	}
	
	const onPlayClick = ()=>{
		setIsPlaying(!isPlaying);
		console.log(steps);
	}

	return(
		<>
		<button onClick={onPlayClick}>Play</button>
    <Song isPlaying={isPlaying} bpm={bpm} volume={-3} isMuted={false}>
      <Track steps={steps} >
        <Instrument type="synth" />
      </Track>
    </Song>
		<PianoRoll setSteps={pianoRollCallbackFunction}></PianoRoll>
		<p>{steps}</p>
		</>
	)

}
