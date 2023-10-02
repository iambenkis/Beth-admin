import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { useState, useEffect } from 'react'

const User = () => {
  const userss = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      createdAt: '2023-01-01',
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      createdAt: '2023-02-15',
    },
    // Add more user data objects as needed
  ]

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  console.log(users, 'users')

  return (
    <div className="flex pl-60 pt-10 flex-col items-center h-full ">
      <div className="p-4  w-[90%] h-full mb-10 bg-white flex flex-col   rounded-lg ">
        <div className="">
          <h1 className="p-2 font-medium">Users ({users.length})</h1>
        </div>
        <div>
          <table className="min-w-full table-auto border border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user) => (
                <tr key={user.id} className="border-t  ">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.createdAt}</td>
                  <td className="px-4 py-2 flex ">
                    <AiOutlineEye className="text-blue-500 cursor-pointer" />
                    <MdDelete className="text-red-500 ml-4 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default User
