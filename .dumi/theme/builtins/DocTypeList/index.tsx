import React, { type FC } from 'react';
import './index.less';

const WhoAreUsing: FC = () => {
  return (
    <ul className="dumi-site-who-are-using">
      <li>
        <a href="/frontendbasics" target="_blank" rel="noreferrer">
          <img src="/image/base.png" alt="前端基础" />
          前端基础
        </a>
      </li>
      <li>
        <a href="/backend" target="_blank" rel="noreferrer">
          <img src="/image/designMode.png" alt="design-mode" />
          后端相关
        </a>
      </li>
      <li>
        <a href="/frameworktools" target="_blank" rel="noreferrer">
          <img src="/image/framework.png" alt="framework" />
          框架&库
        </a>
      </li>
      <li>
        <a href="/devstandards" target="_blank" rel="noreferrer">
          <img src="/image/algorithm.png" alt="algorithm" />
          开发规范
        </a>
      </li>
      <li>
        <a href="/frontendbasics/typescript" target="_blank" rel="noreferrer">
          <img src="/image/typescript.png" alt="typescript" />
          Typescript
        </a>
      </li>
      <li>
        <a href="/devtools/uml" target="_blank" rel="noreferrer">
          <img src="/image/uml.png" alt="typescript" />
          UML
        </a>
      </li>
      <li>
        <a href="/nodejs" target="_blank" rel="noreferrer">
          <img src="/image/theory.png" alt="typescript" />
          nodejs
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
