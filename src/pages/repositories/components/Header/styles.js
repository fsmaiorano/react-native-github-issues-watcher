import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingBottom: 20,
  },
  input: {
    width: 300,
    fontSize: 12,
    backgroundColor: colors.gray,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
  },
  loading: {
    ...general.loading,
    marginLeft: 20,
  },
});

export default styles;
