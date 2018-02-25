import colors from './colors';
import metrics from './metrics';

export default {
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  box: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  debugBorder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },
};