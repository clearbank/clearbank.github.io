import { useEffect } from 'react'
import { navigate } from 'gatsby'

const IndexPage = () => {
  useEffect(() => {
    navigate('/uk')
  }, [])

  return null
}

export default IndexPage