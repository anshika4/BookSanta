import React from 'react'; 
import {Image} from 'react-native'; 
//import LottieView from 'lottie-react-native'; 
export default class SantaAnimation extends React.Component { 
    render() { 
        return ( 
        <Image source={require('../assets/13015-santa-claus.gif')} 
        style={{ width:'50%', height: '50%', resizeMode: 'contain'}} /> 
        )
     }
     }