import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { useState } from 'react';
import light from './theme/light';
import { combineTheme, dark } from './theme';
import Switch from 'react-switch';
import { GlobalStyle } from './global';

const App: React.FC = () => {

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Switch checked={theme.title === 'dark'} onChange={toggleTheme} />
    </ThemeProvider>
  )
}

export default App;
