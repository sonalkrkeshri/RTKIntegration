import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';

const RTKIntegration = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default RTKIntegration;