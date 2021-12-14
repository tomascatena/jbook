import React, { FC, useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';
interface Props {
  direction: 'horizontal' | 'vertical';
}

const Resizable: FC<Props> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      height: Infinity,
      width: innerWidth * 0.5,
      maxConstraints: [innerWidth * 0.75, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
      resizeHandles: ['e'],
    };
  } else {
    resizableProps = {
      className: 'resize-vertical',
      height: 300,
      width: Infinity,
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, 100],
      resizeHandles: ['s'],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
