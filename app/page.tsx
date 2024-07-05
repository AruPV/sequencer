import PianoRoll from "@/components/piano-roll";
import dynamic from "next/dynamic";

const Sequencer = dynamic(() => import("../components/sequencer"), {
  ssr: false,
});

export default function Home() {
  return (
		<>
		<Sequencer />
		</>
  );
}
