import React, { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor (props) {
    const {displayName, value, extensions, onChange} = props;
    const [open, setOpen] = useState(true);

    const handleChange = (value, viewUpdate) => {
        onChange(value);
    }

    const basicSetup = {
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
    }
    
    return (
        <div className={`editor-container ${open ? '': 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button 
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon={open? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                className="code-mirror-wrapper"
                value={value}
                onChange={handleChange}
                extensions={extensions}
                height="100%"
                // theme="dark"
                basicSetup={basicSetup}
            />
        </div>
    )
 }