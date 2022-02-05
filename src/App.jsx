import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startNewGame } from "./controller";
import GameMenuPage from "./pages/GameMenuPage";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState([]);
  const [playerSelection, setPlayerSelection] = useState("");
  const [playerSettings, setPlayerSettings] = useState({
    playersPick: "",
    gameMode: "",
  });

  const updateSettings = (mode) => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: playerSelection,
      gameMode: mode,
    });
  };

  const updateBoard = (id) => {
    console.log("updating the board");
  };

  const submitPlayerSettings = () => {
    let gameBoard = startNewGame(playerSettings);
    setGameState([...gameBoard]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <GameMenuPage
                setPlayerSelection={setPlayerSelection}
                submitSettings={submitPlayerSettings}
                updateSettings={updateSettings}
              />
            }
          />
          <Route
            path="/game"
            element={
              <GamePage gameBoard={gameState} updateBoard={updateBoard} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
