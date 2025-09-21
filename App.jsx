import Player from "./components/Player";
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge Title='Easy' targettime={1} />
        <TimerChallenge Title='Not Easy' targettime={5} />
        <TimerChallenge Title='getting tough' targettime={10} />
        <TimerChallenge Title='pros only' targettime={15} />
      </div>
      
    </>
  );
}

export default App;
