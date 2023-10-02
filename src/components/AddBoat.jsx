import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function AddBoat() {
  const navigate = useNavigate()
  const [boatFormData, setBoatFormData] = useState({
    name: '',
    description: '',
    capacity: '',
    image: null, // For storing the selected image file
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBoatFormData({
      ...boatFormData,
      [name]: value,
    })
  }

  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      if (!imageFile) {
        resolve(null) // No image, resolve with null
      }

      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result.split(',')[1]) // Get the Base64 data part
      }
      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(imageFile)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here, you can handle the form submission, e.g., make an API call to add the new boat
    const imageBase64 = await convertImageToBase64(boatFormData.image)
    const boatDataWithImage = {
      name: boatFormData.name,
      description: boatFormData.description,
      capacity: boatFormData.capacity,
      image: imageBase64, // Add the Base64-encoded image
    }

    try {
      const response = await fetch('http://localhost:3000/api/boat/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(boatDataWithImage),
        mode: 'cors',
      })
      const data = await response.json()
      console.log('Success:', data)
      navigate('/boats')
      console.log('Form submitted with data: ', boatDataWithImage)

      if (response.ok) {
        // Boat data was successfully added
        console.log('Boat data added successfully')
        // navigate('/boats')
      } else {
        // Handle error
        console.error('Error adding boat data:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }

    setBoatFormData({
      name: '',
      description: '',
      capacity: '',
      image: null,
    })
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setBoatFormData({
      ...boatFormData,
      image: selectedImage,
    })
  }
  return (
    <div className="flex pl-60 pt-10 flex-col items-center h-full ">
      <div className="p-4  w-[90%] h-full mb-10 bg-white flex flex-col   rounded-lg ">
        <div className="w-full flex justify-between mb-2 items-center">
          <Link to="/boats" className="text-blue-500 font-medium">
            <h1>Back</h1>
          </Link>
          <h1 className="p-2 font-medium">Add a New Boat</h1>
        </div>
        <form onSubmit={handleSubmit} className=" w-[60%] ">
          <div>
            <label htmlFor="name" className="font-medium block">
              Name{' '}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={boatFormData.name}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-md px-2 w-[60%]"
            />
          </div>
          <div>
            <label htmlFor="image" className="font-medium block">
              Image URL{' '}
            </label>
            <input
              type="file"
              id="boatImage"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="border border-gray-400 rounded-md px-2 py-2  w-[60%]"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-medium block">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={boatFormData.description}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-md px-2 w-[60%]"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="font-medium block">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={boatFormData.capacity}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-md px-2 w-[60%]"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md mt-3 uppercase text-xs font-medium "
          >
            Add Boat
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBoat
