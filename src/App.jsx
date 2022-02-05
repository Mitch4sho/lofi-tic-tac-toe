import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startGame } from "./controller";
import GameMenuPage from "./pages/GameMenuPage";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
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

  const submitPlayerSettings = () => {
    startGame(playerSettings);
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
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
