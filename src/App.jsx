import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startNewGame, boardUpdater, restartGame } from "./controller";
import GameMenuPage from "./pages/GameMenuPage";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState([]);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
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

  useEffect(() => {
    if (winner) {
      window.alert("winner");
    } else if (tie) {
      window.alert("tie");
    }
  }, [winner, tie]);

  const updateSettings = (mode) => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: playerSelection,
      gameMode: mode,
    });
  };

  const handleUpdate = (id) => {
    console.log("updating the board", { id });
    let newGameState = boardUpdater(id);

    if (newGameState.winner) setWinner(newGameState.winner);
    if (newGameState.tie) setTie(newGameState.tie);

    setCurrentPlayer(newGameState.playerTurn);
    setGameState([...newGameState.currentBoard]);
  };

  const handleRestart = () => {
    restartGame();
    setGameState([]);
    setWinner(false);
    setTie(false);
  };

  const handleStartGame = () => {
    const { state, playerInfo } = startNewGame(playerSettings);
    setGameState([...state.currentBoard]);
    setPlayerScore({ ...playerScore, ...playerInfo.playerScore });
  };

  const handleNextRound = () => {
    const { state } = startNewGame(playerSettings);
    setGameState([...state.currentBoard]);
  };

  console.log(currentPlayer);
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
                handleNextRound={handleNextRound}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
