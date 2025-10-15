import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './Components/Button';
import { useState } from 'react';

function App() {
  const [result,setResult] = useState(0);

  const {width} = useWindowDimensions();
  const ButtonWidth = width / 4;

  return (
    <View style={styles.container}>
      <StatusBar style = 'light'/>
      <View style = {styles.resultContainer}>
        <Text style = {styles.text}>{result}</Text>
      </View>
      <View style = {styles.buttonContainer}> 
        <View style={styles.leftPad}>
          <View style={styles.number}>
            <Button
              title="1"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="2"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="3"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="4"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="5"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="6"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="7"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="8"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
              <Button
              title="9"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={()=>{}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{width: ButtonWidth*2, height: ButtonWidth}}
              />
              <Button
              title="="
              onPress={()=>{}}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
              />
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title="C"
            onPress={()=>{}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
            />
            <Button
            title="-"
            onPress={()=>{}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width: ButtonWidth, height: ButtonWidth}}
            />
            <Button
            title="+"
            onPress={()=>{}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width: ButtonWidth, height: ButtonWidth*2}}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#ffffff',
    paddingBottom: 30,
    paddingRight: 30,
    textAlign: 'right'
  },
  resultContainer: {
    backgroundColor: '#000',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPad: {
    flex: 3,
    flexDirection: 'column',
  },
  number: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  bottom: {
    flexDirection: 'row',
    alignItems:'flex-end',
  },
  operator: {
    flex: 1,
    flexDirection: 'column',  
    justifyContent: 'flex-end'
  }
});

export default App;