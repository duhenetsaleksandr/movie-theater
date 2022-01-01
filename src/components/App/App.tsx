import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import Movies from 'components/Movies';
import PageNotFound from 'components/PageNotFound';
import { LOCALES } from 'i18n/locales';
import { messages } from 'i18n/messages';

const App = () => {
    const locale = LOCALES.ENGLISH;

    return (
        <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
            <Router>
                <Routes>
                    <Route path='/sign-up' element={<SignUp/>} />
                    <Route path='/sign-in' element={<SignIn/>} />
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='*' element={<PageNotFound/>} />
                </Routes>
            </Router>
        </IntlProvider>
    )
};

export default App;
