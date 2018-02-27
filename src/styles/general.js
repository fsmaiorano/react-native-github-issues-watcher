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
    flexDirection: 'row',
    maxWidth: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
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
  debugBorder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },
};
