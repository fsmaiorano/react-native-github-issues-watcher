import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    flexDirection: 'row',
    maxWidth: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    justifyContent: 'space-between',
  },
  containerImage: {
  },
  containerText: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  subTitle: {
    flex: 1,
    fontSize: 12,
    color: colors.light,
  },
});

export default styles;
