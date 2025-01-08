import { Box, Text } from "@chakra-ui/react";
import {
  MenuArrow,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../ui/menu";
import { LANGUAGE_VERSIONS } from "@/data/editor";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";
interface PropsType {
  language: string;
  onSelect: (language: string) => void;
}
function LanguageSelector({ language, onSelect }: PropsType) {
  return (
    <Box>
      <Text mb={2} className="text-slate-500" fontSize="lg">
        Language
      </Text>
      <MenuRoot lazyMount>
        <MenuTrigger as="button" className="bg-gray-900 p-2 px-4 rounded-md">
          {language}
        </MenuTrigger>
        <MenuContent bg="#110c1b">
          {languages.map(([lang, version]) => {
            return (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.900",
                }}
                onClick={() => onSelect(lang)}
                value=""
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            );
          })}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
}
export default LanguageSelector;
