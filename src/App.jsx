import Header from "../components/header/header.jsx";
import Section from "../components/Section.jsx";
import {useRoutes} from "react-router-dom";
import Corset from "../components/Corset.jsx";
import Dresses from "../components/Dresses.jsx";
import Under from "../components/Under.jsx";
import CorsetPage from "../components/CorsetPage.jsx";
import Footer from "../components/Footer.jsx";
import DressesPage from "../components/DressesPage.jsx";
import Search from "../components/search.jsx";



function App() {
    const router = useRoutes([
            {
                path: "/",
                element: <Section/>,
            },
            {
                path: "/search",
                element: <Search/>,
            },
            {
                path: "/corset",
                children: [
                    {
                        index: true,
                        element: <Corset/>,
                    },
                    {
                        path: ":id",
                        element: <CorsetPage/>
                    }
                ]
            }, {
                path: "/dresses",
                children: [
                    {
                        index: true,
                        element: <Dresses/>,
                    },
                    {
                        path: ":id",
                        element: <DressesPage/>
                    }
                ]
            }, {
                path: "/under",
                element: <Under/>,
            }
        ])

    return (
        <main>
            <Header/>
            {router}

            <Footer/>
        </main>
    )
}

export default App
