import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
  },
  loading: {
    ...general.loading,
  },
  filters: {
    backgroundColor: colors.light,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    maxWidth: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  filterText: {
    color: colors.darkGray,
  },
});

export default styles;
