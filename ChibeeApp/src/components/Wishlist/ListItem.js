import React from 'react';
import Moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationUtils } from '../../navigation';
import DetailActions from '../../redux/DetailRedux/actions';
import { useDispatch } from 'react-redux';

const screenWidth = Dimensions.get('screen').width;

const ListItem = (props) => {
  const dispatch = useDispatch();
  Moment.locale('en');

  const onSuccess = () => {
    NavigationUtils.push({
      screen: 'ListenStory',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const onFail = () => {
    console.log('Get story details fail');
  };

  const onListenStory = () => {
    dispatch(DetailActions.getStoryDetails(props.item.id, onSuccess, onFail));
  };
  return (
    <TouchableOpacity style={styles.storyContain} onPress={onListenStory}>
      <View style={styles.imgTitle}>
        <Image source={{ uri: props.item.image }} style={styles.imgStory} />
        <View style={styles.content}>
          <Text style={styles.nameStory}>{props.item.story_name}</Text>
          <Text style={styles.dateStory}>{Moment(props.item.updated_at).format('DD/MM/YYYY')}</Text>
        </View>
      </View>
      <View>
        <Icon color="#000000" name="headphones" size={35} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  imgTitle: {
    flexDirection: 'row',
  },
  storyContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    borderBottomColor: Colors.primary,
    borderRightColor: '#F5F5F5',
    borderLeftColor: '#F5F5F5',
    borderTopColor: '#F5F5F5',
    borderWidth: 2,
  },
  imgStory: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: (screenWidth * 0.2) / 2,
  },
  content: {
    marginLeft: screenWidth * 0.04,
    justifyContent: 'center',
    width: screenWidth * 0.5,
  },
  nameStory: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateStory: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'left',
  },
});
