import React, { FC } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';
interface Props {
  direction: 'horizontal' | 'vertical';
}

const Resizable: FC<Props> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      height: Infinity,
      width: window.innerWidth * 0.75,
      maxConstraints: [window.innerWidth * 0.75, Infinity],
      minConstraints: [window.innerWidth * 0.2, Infinity],
      resizeHandles: ['e'],
    };
  } else {
    resizableProps = {
      className: 'resize-vertical',
      height: 300,
      width: Infinity,
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      minConstraints: [Infinity, 100],
      resizeHandles: ['s'],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
