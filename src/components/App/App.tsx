import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import PageNotFound from 'components/PageNotFound';

const App = () => (
    <Router>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </Router>
);

export default App;
