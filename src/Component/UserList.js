import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class UserList extends Component {
  render() {
    const { imageStyle, TextStyle, BadgeTextStyle, goldStyle, silverStyle, bronzeStyle, 
      RepTextStyle, badgeContainerStyle, containerStyle, rapuContainerStyle } = styles;
      // console.log(this.props.userData);
       return (
      <View style={containerStyle}>
       <Image source={{ uri: this.props.userData.profile_image }} style={imageStyle} />
       <View style={rapuContainerStyle}>
       <Text style={TextStyle}>{this.props.userData.display_name}</Text>
        <View style={badgeContainerStyle}>
       <Text style={RepTextStyle}>{this.props.userData.reputation}</Text>
       <View style={goldStyle} />
       <Text style={BadgeTextStyle}>{this.props.userData.badge_counts.gold.toString()}</Text>
       <View style={silverStyle} />
       <Text style={BadgeTextStyle}>{this.props.userData.badge_counts.silver.toString()}</Text>
       <View style={bronzeStyle} />
       <Text style={BadgeTextStyle}>{this.props.userData.badge_counts.bronze.toString()}</Text>
       </View>
      </View>
      </View>
    );
}
}

const styles = {
  containerStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 15
  },
  badgeContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rapuContainerStyle: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-around',
     marginLeft: 15
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  goldStyle: {
    backgroundColor: '#F5C302',
    height: 8,
    borderRadius: 4,
    alignSelf: 'center',
    padding: 5,
    width: 8
  },
  silverStyle: {
    backgroundColor: '#C3C3C3',
    height: 8,
    borderRadius: 4,
     alignSelf: 'center',
     padding: 5,
    width: 8
  },
  bronzeStyle: {
    backgroundColor: '#CE9862',
    height: 8,
    borderRadius: 4,
     alignSelf: 'center',
     padding: 5,
    width: 8
  },
  TextStyle: {
    fontSize: 18,
    color: '#65A7C5'
  },
  BadgeTextStyle: {
    fontSize: 12,
    padding: 5,
    color: '#060606'
  },
  RepTextStyle: {
    fontSize: 12,
    color: '#747474',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '300'
  }
};

