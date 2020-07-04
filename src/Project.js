import React, {Component} from 'react';
import PROJECTS from './data/project';

class Project_prop extends Component{
    render(){
        console.log(this.props);
        const { title, description, link, image} = this.props.project_prop;
        return(
            <div style = {{display: 'inline-block', width: 300, margin: 10}}>
               <h3>{title}</h3> 
               <p>{description}</p>
               <img src={image} alt='profile' style={{width: 200, hight: 120}}/>
               <a href={link}>{link}</a>
            </div>
        );
    }
}

class Project extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Project</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project_prop key={PROJECT.id} project_prop={PROJECT}/>
                            );
                        })
                    }                
                </div>
            </div>
        )
    }

}

export default Project;