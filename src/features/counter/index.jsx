import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
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

    const onValue = (newValue) => {
        dispatch(incrementByAmount(newValue))
    }

    const onChange = (value) => {
        setAmount(value);
    }
    return (
        <View>
            <Text>RTK Integration App</Text>
            <Text>Dsecription: </Text>
            <Text>Count Value: {count}</Text>
            <TouchableOpacity onPress={onIncremnet}>
                <Text>Increment by 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDecrement}>
                <Text>Decrement by 1</Text>
            </TouchableOpacity>
            <TextInput onChangeText={onChange} value={amount} inputMode={'numeric'}></TextInput>
            <TouchableOpacity onPress={onValue}>
                <Text>Increment by Value</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Counter;