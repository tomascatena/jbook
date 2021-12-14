import React, { FC } from 'react';
import { ResizableBox } from 'react-resizable';

interface Props {
  direction: 'horizontal' | 'vertical';
}

const Resizable: FC<Props> = ({ direction, children }) => {
  return <div>{children}</div>;
};

export default Resizable;
