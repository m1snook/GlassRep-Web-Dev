import React from "react";
// import "./App.css";
import TopBar from "./components/Page Elements/TopBar";
import NavBar from "./components/Page Elements/NavBar";
import Footer from "./components/Page Elements/Footer";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PowerCredentialsPage from "./pages/PowerCredentials";
import ContactPage from "./pages/Contact";
import ProductDetailsPage from "./pages/ProductDetails";
import Auth from "./pages/Auth";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <TopBar />
      <Switch>
        <Route
          path="/"
          exact={true}
          component={() => <NavBar feature={true} />}
        />
        <Route component={NavBar} />
      </Switch>

      <main>
        <Switch>
          <Route path="/power-cred" component={PowerCredentialsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/details" component={ProductDetailsPage} />
          <Route path="/auth" component={Auth}/>
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </AuthProvider>
  );
};

export default App;
