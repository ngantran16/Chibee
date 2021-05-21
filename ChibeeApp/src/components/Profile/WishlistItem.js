import React from 'react';
import Moment from 'moment';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import DetailActions from '../../redux/DetailRedux/actions';
import CommentActions from '../../redux/CommentRedux/actions';
import { useDispatch } from 'react-redux';
import { NavigationUtils } from '../../navigation';

const WishlistItem = (props) => {
  const data = props.data;
  Moment.locale('en');
  const dispatch = useDispatch();

  const onDetailSuccess = (id) => {
    dispatch(CommentActions.getComment(id, onCommentSuccess, onFail));
  };

  const onCommentSuccess = () => {
    NavigationUtils.push({
      screen: 'WatchVideo',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const onFail = () => {
    console.log('Get detail fail');
  };

  const onVideoClick = (id) => {
    dispatch(DetailActions.getStoryDetails(id, onDetailSuccess, onFail));
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          return (
            <TouchableOpacity
              style={styles.storyContain}
              key={key}
              onPress={() => onVideoClick(item.id)}
            >
              <Image source={{ uri: item.image }} style={styles.imgStory} />
              <View style={styles.content}>
                <Text style={styles.nameStory}>{item.story_name}</Text>
                <Text style={styles.dateStory}>{Moment(item.updated_at).format('DD/MM/YYYY')}</Text>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text style={styles.message}>You haven't added any story into your wishlist yet!</Text>
      )}
    </ScrollView>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  storyContain: {
    marginTop: 20,
  },
  imgStory: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  content: {
    marginTop: 10,
    justifyContent: 'center',
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
