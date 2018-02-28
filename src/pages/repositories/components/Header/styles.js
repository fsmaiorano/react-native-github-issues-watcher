import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    width: 300,
    fontSize: 12,
    backgroundColor: colors.gray,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  loading: {
    ...general.loading,
  },
});

export default styles;
