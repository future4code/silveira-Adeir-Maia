import React, { useState } from "react";

import Home from "./components/pages/home/home";
import Matchs from "./components/pages/matchs/matchs";


const App = () => {
  const [page, setPage] = useState('home')

  const switchPage = () => {
    switch (page) {
      case 'matchs':
        return <Matchs goToProfiles={goToProfiles} />
      default:
        return <Home goToMatchs={goToMatchs} />
    }
  }

  const goToMatchs = () => setPage('matchs')
  const goToProfiles = () => setPage('home')

  return (
    <>
      {switchPage()}
    </>
  );
}

export default App;