import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Wrapper = ({children}) => {
  return (
    <Container className='mt-5 d-flex flex-column align-items-center'>
      {children}
    </Container>
  )
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};


export default Wrapper;
