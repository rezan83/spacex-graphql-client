import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./Launches";
import Launch from "./Launch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
            <h1 id="logo">SpaceX</h1>
                <Switch>
                    <Route exact path="/">
                        <Launches />
                    </Route>
                    <Route path="/launch/:flight_number">
                        <Launch />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
