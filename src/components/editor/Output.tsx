import { Box, Text, Spinner } from "@chakra-ui/react";
import { Button } from "../ui/button";
import axios from "axios";
import { useState } from "react";
import { LANGUAGE_VERSIONS } from "@/data/editor";

interface PropsType {
  editorRef: any;
  language: string;
}
function Output({ editorRef, language }: PropsType) {
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const runCode = async () => {
    let sourceCode;
    if (editorRef.current) {
      sourceCode = editorRef.current.getValue();
    }
    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language: language,
          version:
            LANGUAGE_VERSIONS[language as keyof typeof LANGUAGE_VERSIONS],
          files: [
            {
              content: sourceCode,
            },
          ],
        }
      );

      const result = response.data.run;

      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="w-full md:w-1/2">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant={"outline"}
        color={isError ? "red.400" : ""}
        mb={4}
        loadingText={<Spinner size={"sm"} />}
        loading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
}
export default Output;
