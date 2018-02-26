import { StyleSheet } from 'react-native';

import { general } from 'styles';

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
});

export default styles;
