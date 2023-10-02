import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed h-full bg-blue-500 p-4">
      <a href="/" className="font-bold text-3xl uppercase">
        betsalel <span className="font-light ">ships</span>
      </a>

      <div className="mt-7 border-b-[1px] pb-2 border-solid">
        <a href="/users" className="text-white font-bold  ">
          Users
        </a>
      </div>
      <div className="mt-7 border-b-[1px] pb-2 border-solid">
        <a href="/boats" className="text-white font-bold  ">
          Boats
        </a>
      </div>
      <div className="mt-7 border-b-[1px] pb-2 border-solid">
        <a href="/books" className="text-white font-bold  ">
          Reservations
        </a>
      </div>
      <div className="mt-7 border-b-[1px] pb-2 border-solid">
        <p
          className="text-white font-bold cursor-pointer"
          onClick={() => {
            localStorage.removeItem('admin_token')
            navigate('/login')
          }}
        >
          Logout
        </p>
      </div>
    </div>
  )
}

export default Nav
