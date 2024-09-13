import { StyleSheet, Text, View,  StatusBar, ScrollView, Image } from 'react-native';
import { planetas } from './planetas'
import { CreateComponent } from './Planet'

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       
      <ScrollView showsHorizontalScrollIndicator={false}  style={styles.scrool}>

        <View style={styles.header}>
            <Image source={require('./assets/hand.png')} style={[styles.mainIcon, styles.mainIcon2]}/>
            <Text style={styles.title}>VAMOS EXPLORAR</Text>
            <Image source={require('./assets/hand.png')} style={styles.mainIcon}/>
        </View>

        {
          planetas.map( planet => CreateComponent( planet, styles ))
        }

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  dataValue: {
    color: 'white',
  },

  data: {
    color: 'gray'
  },

  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  planetName: {
    color: 'white',
    fontSize: 20,
  },

  planetImage: {
    width: 150,
    height: 150,
  },

  postHeader: {
    alignItems: 'center'
  },

  postContainer: {
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },

  scrool: {
    width: "80%",
  },

  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  mainIcon2: {
    transform: [
      {scaleX: -1}
    ]
  },

  mainIcon: {
    width: 40,
    height: 40,
  },

  header: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#1f306e',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 10
  },
});
