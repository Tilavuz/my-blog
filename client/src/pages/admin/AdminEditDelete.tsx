import axios from "axios"
import { useEffect, useState } from "react"

// Components

function AdminEditDelete() {

  const [admins, setAdmins] = useState(null)
  const [isEdit, setEdit] = useState(false)
  const [isAddAdmin, setIsAddAdmin] = useState(false)

  const [addAdminData, setAddAdminData] = useState({
    name: '',
    password: ''
  })
  const [editAdminData, setEditAdminData] = useState({
    id: '',
    name: '',
    password: ''
  })

  useEffect(() => {
      try {
          axios.get('http://localhost:3000/api/admin/admins', {
            headers: {
              'x-login-token': localStorage.getItem('token')
            }
          })
          .then(res => {
              setAdmins(res.data)
          })
      }catch(err) {
          console.error(err);
      }
  }, [])

  async function deleteAdmin(id) {
    const promptValue = confirm('Rostan ham bu post-ni o\'chirmoqchimisiz?')
    if(!promptValue) return
    try{
      await axios.delete(`http://localhost:3000/api/admin/${id}`, {
        headers: {
          'x-login-token': localStorage.getItem('token')
        }
      })
    }catch(err) {
      console.log(err);
    }
  }

  async function editAdmin() {
    try{
      await axios.put(`http://localhost:3000/api/admin/${editAdminData.id}`, editAdminData, {
        headers: {
          'x-login-token': localStorage.getItem('token')
        }
      })
      setEdit(false)
    }catch(err) {
      console.log(err);
    }
  }

  async function addAdmin() {
    try {
      axios.post('http://localhost:3000/api/admin/add', addAdminData, {
        headers: {
          'x-login-token': localStorage.getItem('token')
        }
      })
      setIsAddAdmin(false)
    }catch(err) {
      console.error(err);
    }
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setEditAdminData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  
  function handleAddAdminInput(e) {
    const { name, value } = e.target;
    setAddAdminData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={`container mx-auto border-2 py-2`}>
        {
          !isAddAdmin && isEdit && (
            <div className="absolute inset-2/4 translate-x-[-50%] translate-y-[-50%] bg-bgColor2 w-96 h-56 flex flex-col gap-4 p-4 rounded-lg">
              <input
                className="border-2 py-1 px-2 rounded-md"
                type="text"
                placeholder="new Name"
                value={editAdminData.name}
                onChange={handleInput}
                name="name"
              />
              <input
                className="border-2 py-1 px-2 rounded-md"
                type="password"
                placeholder="new Password"
                value={editAdminData.password}
                onChange={handleInput}
                name="password"
              />

              <button type="button" onClick={editAdmin} className="border-2 p-1 rounded-md bg-slate-600 text-white">Edit</button>
              <button className="border-2 p-1 rounded-md bg-red-600 text-white" onClick={() => {
                setEdit(false)
              }}>Exit</button>
            </div>
          )
        }
        {
          isAddAdmin && !isEdit && (
            <div className="absolute inset-2/4 translate-x-[-50%] translate-y-[-50%] bg-bgColor2 w-96 h-56 flex flex-col gap-4 p-4 rounded-lg">
              <input
                className="border-2 py-1 px-2 rounded-md"
                type="text"
                placeholder="Name"
                value={addAdminData.name}
                onChange={handleAddAdminInput}
                name="name"
              />
              <input
                className="border-2 py-1 px-2 rounded-md"
                type="password"
                placeholder="Password"
                value={addAdminData.password}
                onChange={handleAddAdminInput}
                name="password"
              />

              <button type="button" onClick={addAdmin} className="border-2 p-1 rounded-md bg-slate-600 text-white">Add</button>
              <button className="border-2 p-1 rounded-md bg-red-600 text-white" onClick={() => {
                setIsAddAdmin(false)
              }}>Exit</button>
            </div>
          )
        }
        <button onClick={() => {
          setIsAddAdmin(!isAddAdmin)
        }} className="absolute text-4xl rounded-full w-12 h-12 border-2 top-32 right-32 flex items-center justify-center">{`${isAddAdmin ? '-' : '+'}`}</button>
        <ul className="flex flex-col gap-4">
          {
            admins?.map((admin) => {
              return <li key={admin._id} className="border-2 flex justify-between max-w-96">
                <span>{admin.name}</span>
                <div className="flex gap-2">
                  <button onClick={() => {
                    setEdit(true)
                    setEditAdminData({
                      id: admin._id,
                      name: admin.name,
                      password: ''
                    })
                  }}>✏️</button>
                  <button onClick={() => deleteAdmin(admin._id)}>🗑</button>
                </div>
              </li>
            })
          }
        </ul>
    </div>
  )
}

export default AdminEditDelete