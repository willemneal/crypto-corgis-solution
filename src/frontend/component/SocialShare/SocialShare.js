import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {CreationSingle} from '../creation/creationSingle/creationsingle';
import Spinner from '../common/spinner/spinner';

class SocialShare extends Component {
    render(){
        let {
            history,
            load, 
            login
        } = this.props
        if (!load) { return <Spinner /> }

        console.log(history)
        let Corgi = <CreationSingle
                backgroundColor={corgi.backgroundColor}
                color={corgi.color}
                sausage={corgi.sausage}
                quote={corgi.quote} />
        return (
            <div>Share</div>
        )
    }
}

export default withRouter(SocialShare)