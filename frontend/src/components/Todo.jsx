
export function Todo({todos}){
    const [completed,setCompleted] = useState(false);

    // return  // <div>
    //     <h1>Go to Gym</h1>
    //     <h2>You need to go to Gym</h2>
    //     <button>Mark as completed</button>
    // </div>

    return  <div>
        {todos.map(function(todo){
            return  <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={()=>{
                console.log(todo._id);
             
                fetch("http://localhost:3000/completed",{
                    method:"PUT",
                    body:JSON.stringify({
                        id:todo._id
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                       
                    
                }).then(async function(res){
                    const json = await res.json();
                    alert("Todo marked true");
                    
                   }) 
            }}>{todo.completed == true ? "Completed":"Mark as Completed"}</button>
            </div>
          
        })}
    </div>

}