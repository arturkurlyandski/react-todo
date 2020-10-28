import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default Todo

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
}

function Todo({title, isDone}) {
    return <DivStyled>
        <label>
            <input type="checkbox" checked={isDone} />
            {title}
        </label>
        
    </DivStyled>
}

const DivStyled = styled.div`
  background-color: red; 
`
