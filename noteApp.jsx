import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])
  

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !detail.trim()) {
      alert("Title aur Details dono bharna zaruri hai!");
      return;
    }

    const copytask = [...task];

    copytask.push({title ,  detail})
    settask(copytask)
    settitle('')
    setdetail('')
  }

  const deleteNote = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1)

    settask(copytask)
  }

  return (
    <>
      <div className="home">
        <h1>Notes App</h1>

        <div className="hero">
          <div className="leftcontent">
            <h1>Add Notes</h1>
            <form onSubmit={(e) => {
              submitHandler(e) 
            }}>
              <input type="text" 
                placeholder='Write Title'
                value={title}
                onChange={(e) => {
                  settitle(e.target.value)
                }}
                />
              <textarea name="detail" 
                placeholder='Write Detail'
                value={detail}
                onChange={(e) => {
                  setdetail(e.target.value)
                }}
              ></textarea>
              <button id='submitBtn'>Submit</button>
            </form>
          </div>
          
          <div className="rightcontent">
            <h1>Recent Notes</h1>
            <div className="container">
              {task.map((elem, idx)=>{
                return <div key={idx} className="notepad">
                     <h3>{elem.title}</h3>
                     <p>{elem.detail}</p>
                     <button id='btn' onClick={()=> {
                       deleteNote(idx)
                      }}
                     >Delete</button>
                   </div>
                  })}
            </div>
          </div>
          

        </div>  
      </div>
    </>
  )
}

export default App


