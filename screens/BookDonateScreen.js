import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';



export default class BookDonateScreen extends Component{
    render(){
        return(
            <View>
                <Text>
                    Donate Screen
                </Text>
            </View>
        )
    }
}