import React, { FC, useEffect, useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
// import prettier from 'prettier';
// import parser from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import './syntax.css';
import { FormatButton, CodeEditorContainer } from './CodeEditor.styled';

type PrettierFormatter = (unformatted: string) => string;

declare global {
  interface Window {
    __PRETTIER_FORMATTER__: PrettierFormatter;
  }
}

interface Props {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: FC<Props> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();
  const prettierFormatter = useRef<PrettierFormatter>();

  const onEditorDidMount: EditorDidMount = (getCurrentValue, monacoEditor) => {
    editorRef.current = monacoEditor;

    monacoEditor.onDidChangeModelContent(() => {
      onChange(getCurrentValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );

    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  useEffect(() => {
    prettierFormatter.current = window.__PRETTIER_FORMATTER__;
  }, []);

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();

    let formatted: string;

    if (prettierFormatter.current) {
      formatted = prettierFormatter.current(unformatted).replace(/\n$/, '');
    } else {
      formatted = unformatted;
    }

    editorRef.current.setValue(formatted);
  };

  return (
    <CodeEditorContainer>
      <FormatButton size="small" variant="outlined" onClick={onFormatClick}>
        Format
      </FormatButton>

      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        theme="dark"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: true,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </CodeEditorContainer>
  );
};

export default CodeEditor;
