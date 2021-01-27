const baseURL = 'http://localhost:3001';

export const getTodos = () =>{
    return fetch(`${baseURL}/info`).then(res =>res.json());
}

export const createTodo = (payload) =>{
    const {title} = payload;
    fetch(`${baseURL}/todos`,{
        
    })
}
