declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;

type T4 = ReturnType<typeof f1>;

// 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

// https://blog.csdn.net/wu_xianqiang/article/details/115427146
// 你的答案
type MyReturnType<T> = T extends (...args: any) => infer V ? V : T
type ss = typeof f1;

// type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
interface User {
    name: string;
    age: number;
}
// 比如
type Test = ReturnType<Func>; // Test = User
type ssssd<T> = T extends (...args:any) => infer P ? P : T;
type ddd = ssssd<Func>;

// type T = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.


type Func = (user: User) => void;
type ParamType<T> = T extends (arg: infer P) =>any ? P : T;
type Param = ssssd<Func>; // Param = User
type Params= ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;

type Person = {
    name: string;
    age: number;
  }
  
  let man: Person = {
    name: "Semlinker",
    age: 30
  }
  
  type Human = typeof man;


  const fns = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fns> // should be "1 | 2"
  type myReturnTypes<T> = T extends (...args)=> infer P ? P : T;
  type a1 = myReturnTypes<typeof fns> // should be "1 | 2"
