
 import React from 'react';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
 import { persistor, runSaga, store } from './src/redux/store/configureStore';
 import rootSagas from './src/redux/sagas';
import MoviesScreen from './src/screen/Movies';
 const App = () => {
   return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <MoviesScreen />
       </PersistGate>
     </Provider>
   );
 };
 
 runSaga(rootSagas);
 
 export default App;
 