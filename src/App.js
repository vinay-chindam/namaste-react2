import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { ThemeProvider } from "./contexts/ThemeContext";
import './App.css'
import { UserProvider } from "./contexts/UserContext";
import { LoginProvider } from "./contexts/LoginContext";

import {data} from "./dummyData"

function App() {
  console.log(data)
  return(
    <>
    <ThemeProvider>
      <UserProvider>
        <LoginProvider>
          <RouterProvider router={router} />;

        </LoginProvider>
        
      </UserProvider>

    </ThemeProvider>
    
    </>
  )

   
}

export default App;