import { Card } from 'native-base';
import React from 'react';

import { StyleSheet, Text,View,  FlatList,  RefreshControl,refreshing,onRefresh } from 'react-native';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';

import CardsScreen from './Card';


const HomeScreen = (props) => {

  const {
  } = props;

  return(

      <View style = {styles.fondo}> 


          <FlatList

              style={styles.fondo}

              refreshControl={
                  <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                  />
              }

              ListHeaderComponent={
                  <View style = {styles.fondo}>
                      <ExploreScreen/>      
                     
                  </View>
              }
              ListFooterComponent={
                    <CardsScreen
                    />
                
            }
             
          />
           
      </View>


  );

}


  const styles=StyleSheet.create({
      container:{
  
          backgroundColor: '#9599B3',
          flexDirection: 'column',
          alignItems: 'center',
      },

      fondo:{
          backgroundColor: '#fafafa',
      },

      titulo:{
          marginTop:5,
          fontSize:22,
          marginLeft:10,
          backgroundColor:'#ffffff',
          fontWeight: 'bold'
      },
      ti1:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#98cb40',
       marginTop:1,
        marginHorizontal:10,
        textAlign:'auto'
      },

  })
  export default HomeScreen;