
// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

interface Person {
    name: string;
    age: number;
    location: string;
    1:number;
}

type LazyPerson = Getters<Person>

type GetRealName<T> = {
    [P in keyof T as `Real${number & P}`]:T[P];
}
type LazyPersona = GetRealName<Person>
