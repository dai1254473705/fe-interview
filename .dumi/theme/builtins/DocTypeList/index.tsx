import React, { type FC } from 'react';
import './index.less';

const WhoAreUsing: FC = () => {
  return (
    <ul className="dumi-site-who-are-using">
      <li>
        <a href="/base" target="_blank" rel="noreferrer">
          <img src="/image/base.png" alt="前端基础" />
          前端基础
        </a>
      </li>
      <li>
        <a href="/designMode" target="_blank" rel="noreferrer">
          <img src="/image/designMode.png" alt="designMode" />
          设计模式
        </a>
      </li>
      <li>
        <a href="/framework" target="_blank" rel="noreferrer">
          <img src="/image/framework.png" alt="framework" />
          框架
        </a>
      </li>
      <li>
        <a href="/algorithm" target="_blank" rel="noreferrer">
          <img src="/image/algorithm.png" alt="algorithm" />
          算法
        </a>
      </li>
      <li>
        <a href="/typescript" target="_blank" rel="noreferrer">
          <img src="/image/typescript.png" alt="typescript" />
          Typescript
        </a>
      </li>
      <li>
        <a href="/uml" target="_blank" rel="noreferrer">
          <img src="/image/uml.png" alt="typescript" />
          UML
        </a>
      </li>
      <li>
        <a href="/theory" target="_blank" rel="noreferrer">
          <img src="/image/theory.png" alt="typescript" />
          八股文
        </a>
      </li>
      <li>
        <a href="/photography" target="_blank" rel="noreferrer">
          <img src="/image/photography.png" alt="typescript" />
          摄影
        </a>
      </li>
    </ul>
  );
};

export default WhoAreUsing;
