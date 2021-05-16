import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;


const ReadStory = () => {
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
  const dataComment = useSelector((state) => state.comment.dataComment);
  const [cmt, setCmt] = useState('   Viết nhận xét ... ');

  const getReadStory = useSelector((state) => state.storyDetails);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{getReadStory.getStoryDetailsResponse?.story_name}</Text>
        <Text />
      </View>

      <View>
        <Image  source={{ uri: getReadStory.getStoryDetailsResponse?.image }} style={styles.imgStory} />
      </View>
      {checkViewAll ? (
        <View style={styles.story}>
          <Text style={styles.content}>
          {getReadStory.getStoryDetailsResponse?.content}
          </Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Ẩn bớt</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.story}>
          <Text style={styles.content} numberOfLines={6}>
          {getReadStory.getStoryDetailsResponse?.content}
          </Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      )}

      <View>
        <Text style={styles.txtComment}>Bình luận ({dataComment && dataComment.length > 0 ? dataComment.length : 0}) </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain}>
            <Image source={Images.send} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View>
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
                    key={key}
                  />
                );
              })}
            </View>) : (<Text>This story hasn't had any comment yet</Text>)
          }</View>
          </ScrollView>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>Xem thêm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReadStory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    padding: 10,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imgStory: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    textAlign: 'justify',
    color: 'gray',
  },
  story: {
    marginTop: 15,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputComment: {
    width: '98%',
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
});
