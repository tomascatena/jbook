import React, { FC } from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor: FC = () => {
	return (
		<MonacoEditor
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
