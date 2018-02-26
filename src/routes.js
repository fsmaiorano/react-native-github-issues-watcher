import { StackNavigator } from 'react-navigation';

import { metrics } from 'styles';

// Pages
import ListRepositories from './pages/repositories';
import Issues from './pages/issues';

const createNavigator = () => StackNavigator({
  ListRepositories: { screen: ListRepositories },
  Issues: { screen: Issues },
}, {
  initialRouteName: 'ListRepositories',
  navigationOptions: () => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
  }),
});

export default createNavigator;

