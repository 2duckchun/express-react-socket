import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Router } from "./router";

const App: React.FC = () => {
  return <Router />;
};

export default App;
