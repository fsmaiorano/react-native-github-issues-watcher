import { StyleSheet } from 'react-native';

import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    maxWidth: metrics.screenWidth,
    marginLeft: 30,
    marginRight: 30,
  },
  avatar: {
    width: 45,
    height: 45,
  },
});

export default styles;
