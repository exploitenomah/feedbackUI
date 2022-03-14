
import {
    HeaderWrapper
} from './Header.Styles'

const Header = ( props ) => {

    return (
        <HeaderWrapper>
           <h1>{props.heading || 'Feedback UI'}</h1>
        </HeaderWrapper>
    )
}

export default Header