import { Input } from 'antd';
import React, { useEffect, useState, type FC } from 'react';
const { Search } = Input;

/**
 * exec() 方法用于检索字符串中的正则表达式的匹配。
 * @param url
 * @returns obj
 */
const urlParse = (url: string) => {
  const query = url.replace(/.*\?/, '').replace(/#.*/,'');
  const reg = /([^=&]*)(=)([^=&]*)/g;
  const obj = {};
  while (reg.exec(query)) {
    obj[RegExp.$1] = RegExp.$3;
  }
  return obj;
};
const Test: FC = () => {
  const [url, setUrl] = useState('xxx?a=1&b=4&s=5');
  const [res, setRes] = useState({});

  const parse = (parseUrl) => {
    const res = urlParse(parseUrl);
    setRes(res);
  };

  useEffect(() => {
    parse(url);
  }, []);

  return (
    <div>
      <Search
        addonBefore="https://"
        placeholder="input url"
        value={url}
        allowClear
        onChange={(e) => {
          const val = e.target.value;
          setUrl(val);
        }}
        onSearch={(parseUrl) => {
          parse(parseUrl);
        }}
      />
      <pre>{JSON.stringify(res)}</pre>
    </div>
  );
};

export default Test;
