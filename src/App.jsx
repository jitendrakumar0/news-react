import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Context } from "./context/context";
// import OfferAlert from './components/offerAlert/OfferAlert';
import RouteComponent from "./routes/Routes";

function App() {
    return (
        <Context.Provider value={{}}>
            <BrowserRouter>
                {/* <OfferAlert/> */}
                <Header />
                <main>
                    <RouteComponent/>
                </main>
                <Footer />
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
