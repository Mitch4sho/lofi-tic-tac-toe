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
  const [state, setState] = useState({
    boardState: [],
    winner: false,
    tie: false,
    currentPlayer: "X",
  });
  const [gameState, setGameState] = useState([]);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
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
    let newGameState = boardUpdater(id);
    setState({
      ...state,
      boardState: [...newGameState.currentBoard],
      winner: newGameState.winner,
      tie: newGameState.tie,
      currentPlayer: newGameState.playerTurn,
    });

    // if (newGameState.winner) setWinner(newGameState.winner);
    // if (newGameState.tie) setTie(newGameState.tie);

    // setCurrentPlayer(newGameState.playerTurn);
    // setGameState([...newGameState.currentBoard]);
  };

  const handleRestart = () => {
    restartGame();
    setState({
      boardState: [],
      winner: false,
      tie: false,
      currentPlayer: "X",
      playerSelection: "",
    });
    // setGameState([]);
    // setWinner(false);
    // setTie(false);
  };

  const handleStartGame = () => {
    const { state, playerInfo } = startNewGame(playerSettings);
    setState({
      ...state,
      boardState: [...state.currentBoard],
    });
    // setGameState([...state.currentBoard]);
    // FIXME: the state is not being set right needs to update only players new score, we need to update each win loss and tie state
    setPlayerScore({ ...playerScore, ...playerInfo.playerScore });
  };

  // start the next round with player default settings
  const handleNextRound = () => {
    const { state } = startNewGame(playerSettings);
    setState({
      ...state,
      boardState: [...state.currentBoard],
      winner: false,
      tie: false,
      setCurrentPlayer: "X",
    });
    // setGameState([...state.currentBoard]);
    // setWinner(false);
    // setTie(false);
    // setCurrentPlayer("X");
  };

  useEffect(() => {
    handleStartGame();
  }, [playerSettings.gameMode]);

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
                    gameState={state}
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
