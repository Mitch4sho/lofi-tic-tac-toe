import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { startNewGame, boardUpdater, restartGame } from "./controller";
import GameMenuPage from "./gameMenu/GameMenuPage";
import GamePage from "./game/GamePage";
import { AudioButtonStyled } from "./shared/AudioComponent/AudioButton.styles";
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

  const updateSettings = (gameMode, selection = playerSettings.playersPick) => {
    setPlayerSettings({
      ...playerSettings,
      playersPick: selection,
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
    let {currentBoard, winner, tie, playerTurn} = boardUpdater(id);
    setGameState({
      ...gameState,
      boardState: currentBoard,
      winner: winner,
      tie: tie,
      currentPlayer: playerTurn,
    });
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
    })
  };

  const handleStartGame = () => {
    console.log('starting game')
    const { state, playerInfo } = startNewGame(playerSettings);
    
    setGameState({
      ...gameState,
      boardState: state.currentBoard,
    });
    // FIXME: the state is not being set right needs to update only players new score, we need to update each win loss and tie state
    setPlayerScore({ ...playerInfo.playerScore });
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

  console.log({state: gameState});

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppContainer>
          <GlobalStyles />
          <AudioButtonStyled />
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
        </AppContainer>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
