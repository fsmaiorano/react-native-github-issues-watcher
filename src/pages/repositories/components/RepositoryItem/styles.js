import { StyleSheet } from 'react-native';

import { general, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
  },
  containerImage: {
    ...general.containerImage,
  },
  containerText: {
    ...general.containerText,
  },
  avatar: {
    ...general.avatar,
  },
  title: {
    ...general.title,
  },
  subTitle: {
    ...general.subTitle,
  },
  icon: {
    alignSelf: 'center',
    color: colors.midGray,
  },
});

export default styles;
