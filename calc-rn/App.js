import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './Components/Button';
import { useState } from 'react';

const Operator = {
  CLEAR: 'C',
  PLUS: '+',
  MINUS: '-',
  EQUAL: '=',
}

function App() {
  const [result, setResult] = useState(0);
  const { width } = useWindowDimensions();
  const ButtonWidth = width / 4 - 1;
  const [formula, setFormula] = useState([]);

  const onPressNumber = (number) => {
    const last = formula[formula.length - 1];
    if (isNaN(last)) {
      setResult(number);
      setFormula((prev) => [...prev, number]);
    } else {
      const newNumber = (last ?? 0) * 10 + number;
      setResult(newNumber);
      setFormula((prev) => {
        prev.pop()
        return [...prev, newNumber];
      })
    }
  }

  const onPressOperator = (operator) => {
    switch (operator) {
      case Operator.CLEAR:
        setFormula([]);
        setResult(0);
        return;
      case Operator.EQUAL:
        calculate();
        return;
      default:
        {
          const last = formula[formula.length - 1]
          if ([Operator.PLUS, Operator.MINUS].includes(last)) {
            setFormula((prev) => {
              return [...prev, operator]
            })
          } else {
            setFormula((prev) => [...prev, operator])
          }
        }
    }
  }

  let calculate = () => {
    let calculateNumber = 0;
    let operator = '';
    formula.forEach((value) => {
      if ([Operator.PLUS, Operator.MINUS].includes(value)) {
        operator = value;
      } else {
        if (operator === Operator.PLUS) {
          calculateNumber = calculateNumber + value;
        } else if (operator === Operator.MINUS) {
          calculateNumber = calculateNumber - value;
        } else {
          calculateNumber = value;
        }
      }
    })
    setResult(calculateNumber);
    setFormula([calculateNumber]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, key) => (
              <Button
                key={key}
                title={num}
                buttonType={ButtonTypes.NUMBER}
                buttonStyle={{ width: ButtonWidth, height: ButtonWidth, marginBottom: 1 }}
                onPress={() => onPressNumber(num)}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title={"0"}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{ width: ButtonWidth * 2, height: ButtonWidth, marginTop: 1 }}
              onPress={() => onPressNumber(0)}
            />
            <Button
              title={Operator.EQUAL}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width: ButtonWidth, height: ButtonWidth, marginTop: 1 }}
              onPress={() => onPressOperator(Operator.EQUAL)}
            />
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title={Operator.CLEAR}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width: ButtonWidth, height: ButtonWidth, marginTop: 1 }}
            onPress={() => onPressOperator(Operator.CLEAR)}
          />
          <Button
            title={Operator.MINUS}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width: ButtonWidth, height: ButtonWidth, marginTop: 1 }}
            onPress={() => onPressOperator(Operator.MINUS)}
          />
          <Button
            title={Operator.PLUS}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width: ButtonWidth, height: ButtonWidth * 2, marginTop: 1 }}
            onPress={() => onPressOperator(Operator.PLUS)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 50,
    padding: 20,
    color: 'white',
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
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: {
    justifyContent: 'flex-start'
  }
});

export default App;