import React, { FC } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';

interface CodeEditorProps {
	initialValue: string;
	onChange(value: string): void;
}

const CodeEditor: FC<CodeEditorProps> = ({ initialValue, onChange }) => {
	const onEditorDidMount: EditorDidMount = (getCurrentValue, monacoEditor) => {
		monacoEditor.onDidChangeModelContent(() => {
			onChange(getCurrentValue());
		});

		monacoEditor.getModel()?.updateOptions({tabSize: 2})
	};

	return (
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
				automaticLayout: true
			}}
		/>
	);
};

export default CodeEditor;
