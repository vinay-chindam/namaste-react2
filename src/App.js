import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { ThemeProvider } from "./contexts/ThemeContext";
import './App.css'
import { UserProvider } from "./contexts/UserContext";

function App() {
  return(
    <>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />;
      </UserProvider>

    </ThemeProvider>
    
    </>
  )

   
}

export default App;