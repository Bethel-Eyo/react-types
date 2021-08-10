import React, { useState } from "react";

export interface CounterProps {
  children: (
    data: {
      count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    }
  ) => JSX.Element | null;
}

const Counter: React.SFC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  return <div>{children({ count, setCount })}</div>;
};

export default Counter;
