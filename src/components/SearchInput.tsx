import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup
      paddingLeft="5px"
      startElement={
        <InputElement pl="8">
          <BsSearch />
        </InputElement>
      }
    >
      <Input
        borderRadius={20}
        placeholder="Searching games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
