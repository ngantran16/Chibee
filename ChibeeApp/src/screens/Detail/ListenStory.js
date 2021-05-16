import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Images from '../../themes/Images';
import { NavigationUtils } from '../../navigation';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import Colors from '../../themes/Colors';
import CommentActions from '../../redux/CommentRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const ListenStory = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const id_story = useSelector((state) => state.storyDetails.getStoryDetailsResponse.id);
  useEffect(() => {
    dispatch(CommentActions.getComment(id_story));
  }, [dispatch, id_story]);

  const [cmt, setCmt] = useState('');

  const onReadStory = () => {
    NavigationUtils.push({ screen: 'ReadStory', isTopBarEnable: false, isBottomTabsEnable: false });
  };

  const onWatchStory = () => {
    NavigationUtils.push({
      screen: 'WatchVideo',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const addComment = () => {
    const data = {    
      token: token,
      id_story: id_story,
      content: cmt,
    }
    dispatch(CommentActions.addComment(data));
    setCmt('');
  }
  const isLoading = useSelector((state) => state.comment.loadingComment);
  const addCmtLoading = useSelector((state) => state.comment.loadingAddComment);
  const dataComment = useSelector((state) => state.comment.dataComment);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Cô Bé Choàng Khăn đỏ</Text>
        <Text />
      </View>

      <View>
        <Image source={Images.story4} style={styles.imageStory} />
        <Image source={Images.settime} style={styles.timestory} />
      </View>

      <View style={styles.playControl}>
        <View>
          <Image source={Images.clock} />
        </View>
        <View style={styles.playAudio}>
          <Image source={Images.next} />
          <Image source={Images.playstory} />
          <Image source={Images.next2} />
        </View>

        <View>
          <Image source={Images.returnStory} />
        </View>
      </View>
      <View style={styles.playStory}>
        <TouchableOpacity>
          <Image source={Images.heart} style={styles.iconStory} />
          <Text style={styles.typeStory}>Yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReadStory}>
          <Image source={Images.book} style={styles.iconStory} />
          <Text style={styles.typeStory}>Đọc truyện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWatchStory}>
          <Image source={Images.video} style={styles.iconStory} />
          <Text style={styles.typeStory}>Xem video</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.txtComment}>Bình luận ({dataComment && dataComment.length > 0 ? dataComment.length : 0}) </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            placeholder="Viết nhận xét ..."
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain} onPress={addComment}>
            <Image source={Images.send} />
          </TouchableOpacity>
        </View>
        {
          dataComment && dataComment.length > 0 ? (
            <View style={styles.listComment}>
              {dataComment.map((item, key) => {
                return (
                  <EvaluateItem
                    author= {item.full_name}
                    isFirst= {item.isFirst}
                    content= {item.content}
                    avatar = {item.avatar}
                    dateComment = {item.created_at}
                    key={key}
                  />
                );
              })}
            <TouchableOpacity>
              <Text style={styles.viewAll}>Xem thêm</Text>
            </TouchableOpacity>
            </View>
          ) : isLoading || addCmtLoading ? <ActivityIndicator size="large" color="#FF6600" /> : <Text>This story hasn't had any comment yet</Text>
          }
      </View>
    </ScrollView>
  );
};
export default ListenStory;
const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageStory: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 18,
  },
  timestory: {
    width: '100%',
    marginTop: 5,
  },
  playControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  playAudio: {
    flexDirection: 'row',
  },
  playStory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    marginTop: 25,
    paddingTop: 10,
  },
  typeStory: {
    fontSize: 13,
    paddingLeft: 3,
  },
  iconStory: {
    marginLeft: 20,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputComment: {
    width: screenWidth - 36,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
    marginLeft: -15,
  },
  sendContain: {
    marginLeft: -38,
    marginTop: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listComment: {
    marginTop: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
});
