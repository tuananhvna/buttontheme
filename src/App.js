import React from "react";
import Header from "./Header";
import ThemeContext from "./ThemeContext";

function App() {
  const [buttonStyle, setButtonStyle] = React.useState({buttonStyle: {}});

  React.useEffect(
    () =>
      setButtonStyle({
        buttonStyle: {
          blue: {
            color: 'white',
            backgroundColor: 'blue',
          },
          black: {
            color: 'white',
            backgroundColor: 'black',
          }
        }
      }),
    []
  );
  
  return (
    <ThemeContext.Provider value={buttonStyle}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;