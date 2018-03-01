import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingBottom: 15,
  },
  input: {
    width: 300,
    fontSize: 12,
    height: 30,
    backgroundColor: colors.gray,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
    marginLeft: 20,
  },
  loading: {
    ...general.loading,
    marginLeft: 20,
  },
});

export default styles;
