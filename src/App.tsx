import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { AppRouter } from '@routers/App.router'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
