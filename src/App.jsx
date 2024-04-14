
import { useSelector } from 'react-redux'
import { useRef } from "react"
import { useDispatch } from "react-redux";
import './App.css'

function App() {
  const users = useSelector(state => state.users.users)
  const nameRef = useRef(null);
  const surNameRef = useRef(null);
  const ageREf = useRef(null);
  const dispatch = useDispatch();

  const validate =() =>  {
    if (!nameRef.current.value) {
      alert('Name is not empty')
      nameRef.current.focus();
      return false
    }
    if (!surNameRef.current.value) {
      alert('surName is not empty')
      surNameRef.current.focus();
      return false
    }
    if (!ageREf.current.value) {
      alert('Age is not empty')
      ageREf.current.focus();
      return false
    }
    return true
  }
  function handleSubmit(e) {
    e.preventDefault()
    const isValid = validate();
    if (isValid) {
      const user = {
        name: nameRef.current.value,
        surname: surNameRef.current.value,
        age: ageREf.current.value,
        id: Date.now()
      }
      dispatch({ type: 'Add', payload: user })
      nameRef.current.value = null;
      surNameRef.current.value = null;
      ageREf.current.value = null;
    }
  }

  // function handledelete (id) {
  //   let isDelete = confirm('Are you want to delete?');
  //   if (isDelete) {
  //     dispatch({type: 'del', payload: id})
  //   }
  // }
 
  return (
    <>
      <section className="section">
        <div className="container mx-auto">
          <form className="flex flex-col w-3/6 justfy-center mx-auto pb-24 px-24 pt-14 bg-slate-900 rounded-lg mt-9" onSubmit={handleSubmit}>
            <h1 className="text-white text-center text-5xl	mb-16">Users</h1>
            <label className="text-white" htmlFor="name">Enter Name <span style={{ color: 'red' }}>*</span></label>
            <input ref={nameRef} id="name" className="my-4 rounded-lg	py-4 px-5" type="text" placeholder="Enter Name" />
            <label className="text-white" htmlFor="surname">Enter SurName <span style={{ color: 'red' }}>*</span></label>
            <input ref={surNameRef} id="surname" className="my-4 rounded-lg	py-4 px-5" type="text" placeholder="Enter Surname" />
            <label className="text-white" htmlFor="age">Enter Age <span style={{ color: 'red' }}>*</span></label>
            <input ref={ageREf} id="age" className="my-4 rounded-lg	py-4 px-5" type="number" placeholder="Enter Age" />
            <button className="text-white bg-purple-900	py-4 mt-5 rounded-lg text-lg transition  duration-700	 hover:bg-purple-950 ">SAVE</button>
          </form>
          <div className='bg-slate-900 w-3/6 pt-4 pb-9 my-9 mx-auto px-24 mb-24'>
          <div  className="Card flex justify-between text-white  mx-auto py-2 px-3 bg-slate-800 rounded-lg mt-9">
                <h1>N#</h1>
                <h1>Name</h1>
                <h1>SurName</h1>
                <h1>Age</h1>
                {/* <span >
                 Actions
                </span> */}
              </div>
          {
            users.length > 0 && users.map((user, index) => {
              return (
                <div key={index} className="Card flex justify-between text-white  mx-auto py-2 px-3 bg-slate-800 rounded-lg mt-9">
                <h1>{index + 1}</h1>
                <h1>{user.name}</h1>
                <h1>{user.surname}</h1>
                <h1>{user.age}</h1>
                {/* <span onClick={() => {handledelete(user.id)}}>
                  <i  className="fa-solid fa-trash cursor-pointer"></i>
                </span> */}
              </div>
              )
            })
          }
        </div>
        </div>
      </section>
    </>
  )
}

export default App
