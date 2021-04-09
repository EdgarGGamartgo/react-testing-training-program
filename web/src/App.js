import { 
  FooterContainer,
  MainContainer,
  HeaderContainer
} from './styles'
import { ErrorBoundary } from './components'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Error404 } from './components/Error404'

const HomePage = () => {
	return (
		<ErrorBoundary>
        <Provider store={store}>
          <HeaderContainer/>
          <MainContainer/>
          <FooterContainer/>
        </Provider>
      </ErrorBoundary>
	)
};

const ErrorPage = () => {
	return (
		<ErrorBoundary>
        <Provider store={store}>
          <Error404/>
          <FooterContainer/>
        </Provider>
      </ErrorBoundary>
	)
};


export { HomePage, ErrorPage };
