import { DefaultTheme, ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { useState } from "react";
import light from "./theme/light";
import { combineTheme, dark } from "./theme";
import Switch from "react-switch";
import { GlobalStyle } from "./global";
import { BsFillSunFill } from "react-icons/bs";
import { SwitchBox } from "./components/SwitchBox";

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

  const toggleTheme = () => {
    setTheme(
      theme.title === "light" ? combineTheme(dark) : combineTheme(light)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Home />

      <SwitchBox>
        <Switch
          checked={theme.title === "dark"}
          onChange={toggleTheme}
          width={40}
          height={20}
          handleDiameter={10}
          onColor="#414141"
          offColor="#aaa"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </SwitchBox>
    </ThemeProvider>
  );
};

export default App;
