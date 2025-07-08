import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../providers/ThemeContext.jsx";
import {SearchProvider} from "../providers/searchContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ThemeProvider>
          <SearchProvider>
              <App />
          </SearchProvider>
      </ThemeProvider>
  </BrowserRouter>


)
