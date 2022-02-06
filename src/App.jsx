import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startNewGame, boardUpdater, restartGame } from "./controller";
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
  const [playerScore, setPlayerScore] = useState({
    wins: 0,
    ties: 0,
    losses: 0,
  });

  const updateSettings = (mode) => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: playerSelection,
      gameMode: mode,
    });
  };

  const handleUpdate = (id) => {
    console.log("updating the board", { id });
    let newBoardState = boardUpdater(id);
    setGameState([...newBoardState]);
  };

  const handleRestart = () => {
    restartGame();
    setGameState([]);
  };

  const handleStartGame = () => {
    const { state, playerInfo } = startNewGame(playerSettings);
    setGameState([...state.currentBoard]);
    setPlayerScore({ ...playerScore, ...playerInfo.playerScore });
  };

  console.log({ gameState, playerScore });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <GameMenuPage
                setPlayerSelection={setPlayerSelection}
                handleStartGame={handleStartGame}
                updateSettings={updateSettings}
              />
            }
          />
          <Route
            path="/game"
            element={
              <GamePage
                gameBoard={gameState}
                updateBoard={handleUpdate}
                handleRestart={handleRestart}
                playerScore={playerScore}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
