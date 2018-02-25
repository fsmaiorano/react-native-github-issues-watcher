import { StyleSheet } from 'react-native';

import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.debugBorder,
    ...general.box,
    flex: 1,
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
    maxWidth: metrics.screenWidth,
    marginLeft: 30,
    marginRight: 30,
  },
  avatar: {
    ...general.debugBorder,
    flex: 1,
    width: 45,
    height: 45,
    alignItems: 'flex-start',
  },
  title: {
    flex: 3,
    ...general.debugBorder,
    alignItems: 'flex-end',
  },
  subTitle: {
    flex: 3,
    ...general.debugBorder,
    alignItems: 'flex-end',
  },
});

export default styles;
