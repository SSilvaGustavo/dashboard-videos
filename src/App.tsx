import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContextProvider>
    </ApolloProvider>
  );
}

export default App;
