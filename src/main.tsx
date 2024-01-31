import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
// import { HooksApp } from './HooksApp';
// import { CounterApp, CounterWithCustomHook } from './01-useState';
// import { FormWithCustomHook, SimpleForm } from './02-useEffect';
// import { MultipleCustomHooks } from './03-examples';
// import { FocusScreen } from './04-useRef';
// import { Layout } from './05-useLayoutEffect';
import { Memorize } from './06-memos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>,
)
