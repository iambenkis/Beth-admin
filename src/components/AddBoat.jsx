import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi'

function AddBoat() {
  const [boatData, setBoatData] = useState({
    name: '',
    image: '',
    description: '',
    capacity: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBoatData({
      ...boatData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here, you can handle the form submission, e.g., make an API call to add the new boat
    console.log('Form submitted with data: ', boatData)
  }

  return (
    <div className="flex pl-60 pt-10 flex-col items-center h-full ">
      <div className="p-4  w-[90%] h-full mb-10 bg-white flex flex-col   rounded-lg ">
        <div className="w-full flex justify-between mb-2 items-center">
          <h1 className="p-2 font-medium">Add a New Boat</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={boatData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={boatData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={boatData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="capacity">Capacity:</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={boatData.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Boat</button>
        </form>
      </div>
    </div>
  )
}

export default AddBoat
