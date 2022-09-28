import React from 'react';
import ThemeContext from './ThemeContext'

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style={themeContext.buttonStyle.black}>Press me</button>
    </div>
  );
}

export default HeaderButton;
