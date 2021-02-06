const baseURL = 'https://gist.githubusercontent.com/May27Oliver/65cbf1224fc415817434715772da2443/raw/b1fc0afb1934594615f5d22fa2720ec5528f322d/todo.json';

//READ
export const getTodos = () =>{
    return fetch(`${baseURL}/info`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(res =>res.json());
}
//CREATE
export const createTodo = async (payload) =>{
    const {title,isDone} = payload;
    const res = await fetch(`${baseURL}/info `,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title,
            isDone
        })
    });
    return await res.json();
}

//DELETE
export const deleteTodo = async (id) =>{
    const res = await fetch(`${baseURL}/info/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
        }
    })
    
    return await res.json();
}

// UPDATE
export const updateTodo = async (payload) =>{
    const {id ,title ,isDone} = payload;
    const res = await fetch(`${baseURL}/info/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            title,
            isDone
        })
    })
    return await res.json();
}