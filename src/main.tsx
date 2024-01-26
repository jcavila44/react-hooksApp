import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
// import { HooksApp } from './HooksApp';
// import { CounterApp, CounterWithCustomHook } from './01-useState';
// import { FormWithCustomHook, SimpleForm } from './02-useEffect';
import { MultipleCustomHooks } from './03-examples';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
