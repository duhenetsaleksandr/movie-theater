import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from 'reportWebVitals';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';
import { darkTheme } from 'global-styles/theme/theme';
import { GlobalStyle, ResetStyle } from 'styled-components/global-styles-components';
import { store } from 'redux/store/configureStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <App />
                <GlobalStyle />
                <ResetStyle />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
