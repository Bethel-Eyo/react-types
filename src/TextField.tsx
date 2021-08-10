import * as React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

export interface TextFieldProps {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string
}

const TextField: React.FC<TextFieldProps> = ({person, text, handleChange}) => {
  const [count, setCount] = React.useState<number | null | undefined>(5);
  const [title, setTitle] = React.useState<TextNode>({text: 'string'});
  const inputRef = React.useRef<HTMLInputElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);
  setCount(undefined);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
