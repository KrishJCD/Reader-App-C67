import React,{Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Audio} from 'expo-av';


export default class PhonicSound extends Component{

  constructor(){
    super();
    this.state={
      color:'white',
      pressed:false,
    }
  }

  playSound=async(phonicName)=>{
    var soundURI="https://s3-whitehatjrcontent.whjr.online/phones/"+phonicName.toUpperCase()+".mp3";
    console.log(soundURI);
    await Audio.Sound.createAsync(
      {uri:soundURI},
      {shouldPlay:true}
    );
  }


  render(){
    return(
      <View>
          <TouchableOpacity onPress={()=>{

            this.setState({pressed:true});


            this.state.pressed?(this.setState({color:'red'})):(this.setState({color:'blue'}));


            this.playSound(this.props.phonicName);
            console.log(this.props.phonicName);

          }}>
            <Text style={{color:'white',
              textAlign:'center',
              borderRadius:10,
              width:100,
              justifyContent:'center',
              alignSelf:'center',
              marginTop:5,
              backgroundColor:this.state.color,
    }}>{this.props.chunkName}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


