import React from 'react';

interface Props {
  text: string;
}

export const TestSharedComponent: React.FC<Props> = ({ text }) => {
  return <div className="p-4 border border rounded shadow-md bg-sky-200">{text}</div>;
};
