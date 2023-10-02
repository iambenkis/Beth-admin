import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Header() {
  return (
    <div
      className={`home bg-cover bg-no-repeat  flex pl-60 pt-10 flex-col items-center h-full `}
    >
      <div className="z-10 w-full h-full  ">
        <div className="text-white flex flex-col justify-end h-full px-6 md:px-20 pb-20 ml-20">
          <div className="flex items-center"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
