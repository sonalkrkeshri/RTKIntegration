import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount} from './counterSlice';

const Counter = () => {
    const [amount, setAmount] = useState(0);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const onIncremnet = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    const onValue = () => {
        dispatch(incrementByAmount(amount))
    }

    const onChange = (value) => {
        setAmount(value);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Counter: RTK Integration App</Text>
            <Text style={styles.description}>Description: Integration of Redux Tool Kit with the app. It can be reflected in the counter operation in the app, where user can either increment the counter or decrement the counter. The result will be available in the redux store.</Text>
            <Text style={styles.count}>Count Value: {count}</Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onIncremnet} style={styles.button}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDecrement} style={styles.button}>
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actions}>
                <TextInput style={styles.inputView} onChangeText={onChange} defaultValue={'0'} value={amount} inputMode={'numeric'}></TextInput>
                <TouchableOpacity onPress={onValue} style={styles.button}>
                    <Text style={styles.buttonText}>Increment by {amount}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        paddingHorizontal: 8,
    },
    heading: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        marginVertical: 8
    },
    description: {
        fontSize: 18,
        color: 'black',
        marginVertical: 8,
        textAlign:'justify'
    },
    count: {
        fontSize: 22,
        marginVertical: 8,
    },
    actions: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 30,
        paddingVertical: 10,
        margin: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    inputView: {
        borderColor: 'blue',
        borderRadius: 10,
        width: '36%',
        borderWidth: 1,
        marginHorizontal: 30,
        fontSize: 18,
        color: 'black',
    }
});

export default Counter;