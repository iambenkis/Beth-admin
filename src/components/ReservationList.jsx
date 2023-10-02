import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { useState, useEffect } from 'react'

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/reservations')
      const data = await response.json()
      setBooks(data.response)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  console.log(books, 'books')

  return (
    <div className="flex pl-60 pt-10 flex-col items-center h-full ">
      <div className="p-4  w-[90%] h-full mb-10 bg-white flex flex-col   rounded-lg ">
        <div className="">
          <h1 className="p-2 font-medium">Books ({books.length})</h1>
        </div>
        <div>
          <table className="min-w-full table-auto border border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">BookID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Boat name</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {books.map((book) => (
                <tr key={book.id} className="border-t  ">
                  <td className="px-4 py-2">
                    {book._id.replace(/[a-zA-Z]/g, '')}
                  </td>
                  <td className="px-4 py-2">{book.user.name}</td>
                  <td className="px-4 py-2">{book.boat.name}</td>
                  <td className="px-4 py-2">{book.createdAt}</td>
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

export default Books
