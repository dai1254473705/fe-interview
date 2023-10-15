interface Todo {
    title: string
    description: string
    completed: boolean
}
type Todo1 = Pick<Todo, 'title'>;
const todo1:Todo1 = {
    title: 'sdf',
};

type MyPick<T,K extends keyof T> = {
    [P in keyof T as P extends K ? P: never]:T[P];
};
type MyPick1<T, K extends keyof T>={
    [P in K]: T[P]
}
type Todo2 = MyPick<Todo, 'title'>
type Todo3 = MyPick1<Todo, 'title'>

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }
// your answers
