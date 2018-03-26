import React from 'react';
import {Link} from 'react-router-dom';

//Material UI
import Grow from 'material-ui/transitions/Grow';
import GridList, { GridListTile } from 'material-ui/GridList';

//importing SDG Images
import NoPovertySquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-01.png';
import ZeroHungerSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-02.png';
import HealthAndWellBeingSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-03.png'
import QualityEducationSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-04.png'
import GenderEqualitySquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-05.png'
import CleanWaterAndSanitationSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-06.png'
import AffordableAndCleanEnergySquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-07.png'
import DecentWorkAndEconomicGrowthSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-08.png'
import IndustryInnovationAndInfrastructureSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-09.png'
import ReducedInequalitiesSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-10.png'
import SustainableCitiesAndCommunitiesSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-11.png'
import ResponsibleConsumptionAndProductionSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-12.png'
import ClimateActionSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-13.png'
import LifeBelowWaterSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-14.png'
import LifeOnLandSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-15.png'
import PeaceJusticeAndStrongInstitutionsSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-16.png'
import PartnershipsForTheGoalsSquareIcon from '../assets/SDG_Icons_Square/E_SDG goals_icons-individual-rgb-17.png'

const tileHeight = 'auto';
const maxTileHeight =  tileHeight + 'px';

const data= [
    {
        alt:'No_Poverty',
        src:NoPovertySquareIcon
    },
    {
        alt:'Zero_Hunger',
        src:ZeroHungerSquareIcon
    },
    {
        alt:'Health_And_Wellbeing',
        src:HealthAndWellBeingSquareIcon
    },
    {
        alt:'Quality_Education',
        src:QualityEducationSquareIcon
    },
    {
        alt:'Gender_Equality',
        src:GenderEqualitySquareIcon
    },
    {
        alt:'Clean_Water_And_Sanitation',
        src:CleanWaterAndSanitationSquareIcon
    },
    {
        alt:'Affordable_And_Clean_Energy',
        src:AffordableAndCleanEnergySquareIcon
    },
    {
        alt:'Decent_Work_And_Economic_Growth',
        src:DecentWorkAndEconomicGrowthSquareIcon
    },
    {
        alt:'Industry_Innovation_And_Infrastructure',
        src:IndustryInnovationAndInfrastructureSquareIcon
    },
    {
        alt:'Reduced_Inequalities',
        src:ReducedInequalitiesSquareIcon
    },
    {
        alt:'Sustainable_Cities_And_Communities',
        src:SustainableCitiesAndCommunitiesSquareIcon
    },
    {
        alt:'Responsible_Consumption_And_Production',
        src:ResponsibleConsumptionAndProductionSquareIcon
    },
    {
        alt:'Climate_Action',
        src:ClimateActionSquareIcon
    },
    {
        alt:'Life_Below_Water',
        src:LifeBelowWaterSquareIcon
    },
    {
        alt:'Life_On_Land',
        src:LifeOnLandSquareIcon
    },
    {
        alt:'Peace_Justice_And_Strong_Institutions',
        src:PeaceJusticeAndStrongInstitutionsSquareIcon
    },
    {
        alt:'Partnerships_For_The_Goals',
        src:PartnershipsForTheGoalsSquareIcon
    },
]

const SDGTile = (props) =>
{
    return(
        <GridListTile key={props.key}>
            <Link to={{pathname:'/goal', hash:`#${props.alt}`}} >
                <img src={props.src} style={{maxWidth:'100%'}} alt={props.alt} />
            </Link>
        </GridListTile>
    )
}

export default class SDGDashboard extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <GridList cols={4} cellHeight={tileHeight}>
                {data.map(goal=>(SDGTile(goal)))}
            </GridList>
        )
    }

}