import React from 'react';

interface Props {
  text: string;
}

export const TestCoreComponent: React.FC<Props> = ({ text }) => {
  return <div className="p-4 border border rounded shadow-md bg-sky-100">{text}</div>;
};
