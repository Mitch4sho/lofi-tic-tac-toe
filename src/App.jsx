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
  });
  const [playerSettings, setPlayerSettings] = useState({
    playersPick: "",
    gameMode: "",
  });
  const [playerScore, setPlayerScore] = useState({
    wins: 0,
    ties: 0,
    losses: 0,
  });

  const updateSettings = (gameMode, selection = "X", aiSelection = "O") => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: selection,
      aiPlayer: aiSelection,
    });

    if (gameMode) {
      setPlayerSettings({
        ...playerSettings,
        playersPick: selection,
        gameMode: gameMode,
      });
    }
  };

  const handleUpdate = (id) => {
    let { state, playerScore } = boardUpdater(id);
    let { currentBoard, winner, tie, playerTurn } = state;

    setGameState({
      ...gameState,
      boardState: currentBoard,
      winner: winner,
      tie: tie,
      currentPlayer: playerTurn,
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
      playerSelection: "",
    });

    setPlayerSettings({
      playersPick: "",
      gameMode: "",
    });
  };

  const handleStartGame = () => {
    const { state, playerInfo, playerScore } = startNewGame(playerSettings);

    setGameState({
      ...gameState,
      boardState: state.currentBoard,
    });
    // FIXME: the state is not being set right needs to update only players new score, we need to update each win loss and tie state
    setPlayerScore(playerScore);
    setPlayerSettings(playerInfo);
  };

  // start the next round with player default settings
  const handleNextRound = () => {
    const { state } = startNewGame(playerSettings);
    setGameState({
      ...gameState,
      boardState: state.currentBoard,
      winner: false,
      tie: false,
      setCurrentPlayer: "X",
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
