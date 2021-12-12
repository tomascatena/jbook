import React, { FC, useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const FormatButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  right: '.5rem',
  top: '.5rem',
}));

const CodeEditorContainer = styled('div')(({ theme }) => ({
  position: 'relative',
}));

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

    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    editorRef.current.setValue(formatted);
  };

  return (
    <CodeEditorContainer>
      <FormatButton variant='outlined' onClick={onFormatClick}>
        Format
      </FormatButton>

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
    </CodeEditorContainer>
  );
};

export default CodeEditor;
