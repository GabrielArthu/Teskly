import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useHeaderInternStyles} from './HeaderIntern.style';
import {useNavigation} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/feather';
import {useTheme} from '../../theme/ThemeContext';
import {useAuth} from '../../context/AuthContext';

const avatarImages: Record<string, any> = {
  avatar_1: {uri: "https://tesklyprofilepics.s3.us-east-2.amazonaws.com/Pics/avatar_1.png"},
  avatar_2: {uri: "https://tesklyprofilepics.s3.us-east-2.amazonaws.com/Pics/avatar_2.png"},
  avatar_3: {uri: "https://tesklyprofilepics.s3.us-east-2.amazonaws.com/Pics/avatar_3.png"},
  avatar_4: {uri: "https://tesklyprofilepics.s3.us-east-2.amazonaws.com/Pics/avatar_4.png"},
  avatar_5: {uri: "https://tesklyprofilepics.s3.us-east-2.amazonaws.com/Pics/avatar_5.png"},

};

const HeaderIntern: React.FC = () => {
  const styles = useHeaderInternStyles();
  const navigation = useNavigation();
  const {theme} = useTheme();
  const {userProfile} = useAuth();

  const avatarSource =
    userProfile?.picture && avatarImages[userProfile.picture]
      ? avatarImages[userProfile.picture]
      : require('../../assets/imgs/profileImage.png');

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={25} color={theme.colors.secondaryBg} />
      </Pressable>
      <Text style={styles.titleText}>TASKLY</Text>
      <Image source={avatarSource} style={styles.profileImage} />
    </View>
  );
};

export default HeaderIntern;
