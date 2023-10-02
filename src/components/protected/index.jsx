import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Protected = ({ children }) => {
  const token_1 = localStorage.getItem('admin_token')
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('admin_token')
      ? localStorage.getItem('admin_token')
      : ''
    if (token === '') {
      navigate('/login')
      console.log('Admin authenticated', token)
    }
  }, [token_1])

  return children
}

Protected.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Protected
