import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { startNewGame, boardUpdater, restartGame } from "./controller";
import GameMenuPage from "./gameMenu/GameMenuPage";
import GamePage from "./game/GamePage";
import { AudioStyled } from "./shared/AudioComponent/Audio.styles";
import { theme } from "./Theme.styles";
import GlobalStyles from "./Global.styles";
import { AppContainer } from "./AppContainer.styles";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState({
    boardState: [],
    winner: false,
    tie: false,
    currentPlayer: "X",
    won: null,
  });
  const [playerSettings, setPlayerSettings] = useState({
    playersPick: null,
    gameMode: null,
    aiPlayer: null,
  });
  const [playerScore, setPlayerScore] = useState({
    wins: 0,
    ties: 0,
    losses: 0,
  });

  const updateSettings = (gameMode, selection, aiSelection) => {
    setPlayerSettings({
      ...playerSettings,
      gameMode: gameMode,
      playersPick: gameMode === "CPU" ? "O" : selection,
      aiPlayer: gameMode === "CPU" ? "X" : selection,
    });
  };

  const handleUpdate = (id) => {
    let { state, playerScore } = boardUpdater(id);
    let { currentBoard, winner, tie, playerTurn, won } = state;

    setGameState({
      ...gameState,
      boardState: currentBoard,
      winner: winner,
      tie: tie,
      currentPlayer: playerTurn,
      won: won,
    });

    setPlayerScore(playerScore);
  };

  const handleRestart = () => {
    restartGame();
    setGameState({
      boardState: [],
      winner: false,
      tie: false,
      currentPlayer: "X",
      won: null,
      start: false,
    });

    setPlayerSettings({
      playersPick: "",
      gameMode: "",
    });
  };

  const handleStartGame = () => {
    const { newState, newSettings, newScore } = startNewGame(playerSettings);

    setGameState({
      ...gameState,
      boardState: newState.currentBoard,
      currentPlayer: newState.playerTurn,
    });
    setPlayerScore(newScore);
    setPlayerSettings(newSettings);
  };

  // start the next round with player default settings
  const handleNextRound = () => {
    const { newState } = startNewGame(playerSettings);
    setGameState({
      ...gameState,
      boardState: newState.currentBoard,
      winner: false,
      tie: false,
      currentPlayer: "X",
      won: null,
    });
  };

  useEffect(() => {
    if (playerSettings.gameMode) handleStartGame();
  }, [playerSettings.gameMode]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppContainer>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route
                path="/"
                element={<GameMenuPage updateSettings={updateSettings} />}
              />
              <Route
                path="/game"
                element={
                  <GamePage
                    gameState={gameState}
                    updateBoard={handleUpdate}
                    handleRestart={handleRestart}
                    playerScore={playerScore}
                    handleNextRound={handleNextRound}
                    playerSettings={playerSettings}
                  />
                }
              />
            </Routes>
          </Router>
          <AudioStyled />
        </AppContainer>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
