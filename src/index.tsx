import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Config, DAppProvider } from "@usedapp/core";
import FirebaseProvider from "./context/FirebaseProvider";
import ThenticApiProvider from "./context/ThenticApiProvider";

const config: Config = {
  readOnlyChainId: 97,
  readOnlyUrls: {
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  multicallAddresses: {
    97: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
  },
  supportedChains: [97],
}
    

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <FirebaseProvider>
        <ThenticApiProvider>
      <App />
      </ThenticApiProvider>
      </FirebaseProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
