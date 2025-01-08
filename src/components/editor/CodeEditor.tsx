import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "@/data/editor";
import Output from "./Output";
function CodeEditor() {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]);
  };
  return (
    <Box className="flex flex-col w-full justify-center items-center md:flex-row p-4">
      <Box className="flex  flex-col gap-4 p-4 md:w-1/2 mx-auto w-full">
        <LanguageSelector onSelect={onSelect} language={language} />
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="75vh"
          className="mx-auto"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]}
          value={value}
          onMount={onMount}
          onChange={(value) => setValue(value!)}
        />
      </Box>
      <Output editorRef={editorRef} language={language} />
    </Box>
  );
}
export default CodeEditor;
