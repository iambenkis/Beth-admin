import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { FiPlusSquare } from 'react-icons/fi'

const Boats = () => {
  const [boats, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/boat')
      const data = await response.json()
      setBooks(data.response)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  console.log(boats, 'books')

  return (
    <div className="flex pl-60 pt-10 flex-col items-center h-full ">
      <div className="p-4  w-[90%] h-full mb-10 bg-white flex flex-col   rounded-lg ">
        <div className="w-full flex justify-between mb-2 items-center">
          <h1 className="p-2 font-medium">Books ({boats.length})</h1>
          <Link
            to="/add-boat"
            className="border-2 bg-gray-300 px-2 flex items-center rounded-sm"
          >
            <FiPlusSquare className="mr-2" />
            Create Boat
          </Link>
        </div>
        <div>
          <table className="min-w-full table-auto border border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Boat name</th>
                <th className="px-4 py-2">Capacity</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {boats.map((boat) => (
                <tr key={boat.id} className="border-t  ">
                  <td className="px-4 py-2">{boat.name}</td>
                  <td className="px-4 py-2">{boat.capacity}</td>
                  <td className="px-4 py-2 w-10">
                    {' '}
                    <img src={`http://localhost:3000/${boat.image}`} alt="" />
                  </td>
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

export default Boats
