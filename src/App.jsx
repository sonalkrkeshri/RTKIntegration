import {View, Text} from 'react-native';
import Counter from './features/counter';

const App = () => {
    return (
        <View>
            <Text>Counter</Text>
            <Counter />
        </View>
    );
};

export default App;