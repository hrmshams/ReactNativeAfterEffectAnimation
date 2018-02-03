/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import Anim from './animation/data.json'
// import Anim from './animation/preloader.json'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const isAnimatingString = ['شروع' , 'توقف'];

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating : 0,
    };
  }

  componentDidMount() {
    this.animation.play();

    
  } 

  _onPressButton = () => {
    if (this.state.isAnimating === 0){ //is stopped
      this.animation.play();
    }else{
      this.animation.stop();
    }

    this.setState({
      isAnimating : ( this.state.isAnimating + 1 ) % 2
    });
  }

  render() {
    return (
      <View >
        <LottieView 
          style = {{
            width : width,
            height : width,
          }}
      		source={Anim} 
          ref={animation => {
	          this.animation = animation;
          }}
          loop = {true}
	      />
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}
          style = {{
            position : 'absolute',
            bottom : 0,
          }}
        >
          <View style={{width: width, height: 100, backgroundColor: 'cyan'}}>
            <Text style={{margin: 10}}>isAnimatingString[this.state.isAnimating]</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

