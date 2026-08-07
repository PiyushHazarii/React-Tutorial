import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    console.log( "Set Title and Details ",title,details);
    // this is how we can add new task to the existing task list
    setTask([...task,{title,details}])
    
    console.log("Task List ",task);

    // const newTask = [...task];
    setTitle('')
    setDetails('')
  }


  function deleteTasks(idx){
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }
  return (
    <div className='flex flex-row items-start h-screen bg-gray-900 shrink-0'>
      <form action="" onSubmit={(e)=>{
        handleSubmit(e);
      }} 
      className='flex w-1/2 items-center justify-between gap-4 mt-10 bg-gray-900 text-white rounded-2xl p-2'>
        <div className='flex flex-col w-full gap-4'>

          <input 
            type="text" 
            placeholder='Enter Notes Heading' 
            className='border-1 text-white border-gray-400 rounded-2xl p-2 w-full '
            value={title}
            onChange={(e)=> {
              setTitle(e.target.value)
            }
            }
          />

          <textarea
            placeholder="Write Details"
            className="border border-gray-400 h-50 rounded-2xl p-2 w-full resize-none"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />   

          <button className='bg-blue-400 outline-none active:scale-95 rounded-2xl p-2 w-full'>Add Note</button>
        </div>
      </form>
      <div className='bg-gray-400 w-1/2 p-4 gap-2 flex flex-col'>
        <h1 className='font-bold'>Recent Notes</h1>
        {task.map((item, idx)=> {
          return (
            <div key={idx} className='border-2 flex flex-col p-4 gap-2 max-h-64  flex  overflow-y-auto  flex-nowrap '>
              <h1>{item.title}</h1>
              <h2>{item.details}</h2>
              <h2 className='rounded-full p-2 bg-red-300 w-16 '
                  onClick={(idx)=>{
                    deleteTasks(idx)
                  }}
              >Delete</h2>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default App