import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

// Re-exported so scripts/prerender.mjs (plain Node, no Vite) can read
// the escritos list without importing import.meta.glob() directly —
// that macro only resolves when a file is compiled by Vite, which
// this SSR bundle is and a raw Node `import` of the source isn't.
export { escritos } from './content/escritos/index.js';

/**
 * Server-only entry point, used exclusively by scripts/prerender.mjs.
 * Never shipped to the browser (that's src/main.jsx).
 */
export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
