import React, { FC } from 'react';
import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
	initialValue: string;
	onChange(value: string): void;
}

const CodeEditor: FC<CodeEditorProps> = ({ initialValue, onChange }) => {
	const onEditorDidMount = (getCurrentValue: () => string, monacoEditor: any) => {
		monacoEditor.onDidChangeModelContent(() => {
			onChange(getCurrentValue());
		});
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
