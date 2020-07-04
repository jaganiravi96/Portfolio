import React, {Component} from 'react';
import SOCIALS from './data/social';

class Social_props extends Component{
    render(){
        const {id, title, image} = this.props.social_prop;
        return(
            <div style={{ display: 'inline-block', width: 30, margin: 10 }}>
                <h6>{title}</h6>
                <img src={image} alt='profile' style={{ width: 20, hight: 12 }} />
            </div>
        )
    }
}

class Social extends Component{
    render(){
        return(
            SOCIALS.map(SOCIAL =>{
                return(
                    <Social_props key={SOCIAL.id} social_prop={SOCIAL}></Social_props>
                );
            })
        )
    }
}

export default Social;