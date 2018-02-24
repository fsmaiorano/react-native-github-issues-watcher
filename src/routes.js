import { StackNavigator } from 'react-navigation';

import { metrics } from 'styles';

// Pages
import ListRepositories from './pages/repositories';

const createNavigator = () => StackNavigator({
  ListRepositories: { screen: ListRepositories },
}, {
  initialRouteName: 'ListRepositories',
  navigationOptions: () => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
  }),
});

export default createNavigator;

