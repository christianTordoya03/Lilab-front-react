import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
