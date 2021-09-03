import CityList from '../components/CityList.jsx'
import {Component} from 'react'
import CityModel from '../models/CityModel.js'
class CityIndex extends Component{
    state = {
        cityData = []
    }
    
    // grab data and add to state
    // map city names and images to a list
    // map information for a city to a show component
    // map the
    render(){
        return(
            <div>
                <CityList/> {/* left side, uses all city names/images */}
                <CityShow/> {/* top right, uses one city id */}
                <CityPosts/> {/* bottom right, uses one city's posts*/}

            </div>
        )
    }
}
    
export default CityIndex


