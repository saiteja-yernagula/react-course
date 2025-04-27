import { Component } from "react";
import { Audio } from 'react-loader-spinner'

class Audiocomp extends Component {
    render() {
        return (
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyleA
                wrapperClass
            />

        )
    }
}

export default Audiocomp