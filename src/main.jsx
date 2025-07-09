import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../providers/ThemeContext.jsx";
import {SearchProvider} from "../providers/searchContext.jsx";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {store} from '../Redux/store.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>



  <BrowserRouter>
      <ThemeProvider>
          <SearchProvider>
              <Provider store={store}>
                  <App />
              </Provider>
          </SearchProvider>
      </ThemeProvider>
  </BrowserRouter>
    </StrictMode>

)
