import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
// import './08-useReducer/intro-reducer.tsx'
// import { HooksApp } from './HooksApp';
// import { CounterApp, CounterWithCustomHook } from './01-useState';
// import { FormWithCustomHook, SimpleForm } from './02-useEffect';
// import { MultipleCustomHooks } from './03-examples';
// import { FocusScreen } from './04-useRef';
// import { Layout } from './05-useLayoutEffect';
// import { CallbackHook } from './06-memos';
// import { Padre } from './07-tarea-memo';
// import { TodoApp } from './08-useReducer';
import { MainApp } from './09-useContext';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
            <MainApp />
        {/* </React.StrictMode>, */}
    </BrowserRouter>
)
