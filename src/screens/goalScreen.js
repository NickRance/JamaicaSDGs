import React,{Component} from 'react'
import GoalChart from '../components/goalChart'

export default class GoalScreen extends Component{
    constructor(props){
        //Renders the goal screen given a dataset and indicator info
        super(props)

    }

    render(){
        return(
            <div>
                {(this.props.location.hash)?this.props.location.hash:''}
                <GoalChart/>
            </div>
        )
    }
}