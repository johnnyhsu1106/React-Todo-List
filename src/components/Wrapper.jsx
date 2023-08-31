import { Container } from 'react-bootstrap'

const Wrapper = ({children}) => {
  return (
    <Container className='mt-5'>
      {children}
    </Container>
  )
}

export default Wrapper;
