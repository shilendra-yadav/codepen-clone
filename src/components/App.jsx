import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { javascript} from '@codemirror/lang-javascript'
import {  html as htmlExt } from '@codemirror/lang-html';
import { css as cssExt } from '@codemirror/lang-css';
import Editor from "./Editor";

function App () {
    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCSS] = useLocalStorage('css', '');
    const [js, setJS] = useLocalStorage('js', '');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() =>{
            setSrcDoc(`<html>
            <head>
                <style>${css}</style>
            </head>
            <body>${html}</body>
            <script>${js}</script>
            </html>`);
        },250)
    
        return () => clearTimeout(timeout);
    },[html,css, js])

    return (
        <>
            <div className="pane top-pane">
                <Editor
                    extension={[htmlExt()]}
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    extension={[ cssExt()]}
                    displayName="CSS"
                    value={css}
                    onChange={setCSS}
                />
                <Editor
                    extension={[javascript({ jsx: true })]}
                    displayName="JS"
                    value={js}
                    onChange={setJS}
                />
            </div>
            <div className="pane">
                <iframe 
                    srcDoc={srcDoc}
                    title='output'
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    )
}

export default App;