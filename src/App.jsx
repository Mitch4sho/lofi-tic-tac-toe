import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { startNewGame, boardUpdater, restartGame } from "./controller";
import GameMenuPage from "./pages/GameMenuPage";
import GamePage from "./pages/GamePage";
import { theme } from "./components/styles/Theme.styles";
import GlobalStyles from "./components/styles/Global.styles";
import { AppContainer } from "./components/styles/AppContainer.styles";
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

  const updateSettings = (mode) => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: playerSelection,
      gameMode: mode,
    });
  };

  const handleUpdate = (id) => {
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
    setWinner(false);
    setTie(false);
    setCurrentPlayer("X");
  };

  useEffect(() => {
    handleStartGame();
  }, [playerSettings]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppContainer>
          <GlobalStyles />
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
                    currentPlayer={currentPlayer}
                    playerSettings={playerSettings}
                    winner={winner}
                    tie={tie}
                  />
                }
              />
            </Routes>
          </Router>
        </AppContainer>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
