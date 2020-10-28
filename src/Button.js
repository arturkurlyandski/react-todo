import styled from 'styled-components/macro'
import PropTypes from 'prop-types'



const ButtonStyled = styled.button`
    padding: 100px 300px;
    background-color: ${(props) => props.color ?? 'blue'};
`

ButtonStyled.propTypes= {
    color: PropTypes.string,
    children: PropTypes.string.isRequired,
}


export default ButtonStyled
