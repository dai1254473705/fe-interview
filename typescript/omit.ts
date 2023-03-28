interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyOmit<T, K extends keyof T> = {
    [U in keyof T as U extends K ? never : U]: T[U]
}
type TodoPreview = MyOmit<Todo, 'description' | 'title'>
const todoa: TodoPreview = {
    completed: false,
}

type MyOmit1<T,K extends T> = {
    [P in keyof T as P extends K ? never: P]:T[P]
}