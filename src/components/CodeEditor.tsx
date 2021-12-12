import React, { FC, useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import Button from '@mui/material/Button';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getCurrentValue, monacoEditor) => {
    editorRef.current = monacoEditor;

    monacoEditor.onDidChangeModelContent(() => {
      onChange(getCurrentValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();

    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });

    editorRef.current.setValue(formatted);
  };

  return (
    <>
      <Button variant='outlined' onClick={onFormatClick}>
        Format
      </Button>

      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language='javascript'
        height='500px'
        theme='dark'
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
    </>
  );
};

export default CodeEditor;
