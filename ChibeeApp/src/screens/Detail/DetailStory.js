import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import Icon from 'react-native-vector-icons/FontAwesome';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import DetailActions from '../../redux/DetailRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import IconStar from '../../components/Home/IconStar';
import { AirbnbRating } from 'react-native-ratings';

const DetailStory = (props) => {
  const [review, setReview] = useState('');
  const [showReview, setShowReview] = useState(false);
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
  const onListen = () => {
    NavigationUtils.push({ screen: 'Invite', isTopBarEnable: false, isBottomTabsEnable: false });
  };
  const onListenStory = () => {
    NavigationUtils.push({
      screen: 'ListenStory',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };
  const listStory = useSelector((state) => state.home.dataStory);
  const data = listStory?.filter((item) => {
    return item;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DetailActions.getStoryDetails(props.data));
  }, [dispatch, props.data]);
  const histories = useSelector((state) => state.storyDetails);

  var iconRatings = [];
  for (let i = 0; i < histories.getStoryDetailsResponse?.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - histories.getStoryDetailsResponse?.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{ uri: histories.getStoryDetailsResponse?.image }}
          style={styles.imgBackground}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => NavigationUtils.popShowBottomTab()}>
            <Icon name="angle-left" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.storyTitle}>
          <Image
            source={{ uri: histories.getStoryDetailsResponse?.image }}
            style={styles.imgStory}
          />
          <View style={styles.startTitle}>
            <Text style={styles.textTitle}>{histories.getStoryDetailsResponse?.story_name}</Text>
            <View style={styles.starContainer}>{iconRatings}</View>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnListen} onPress={onListen}>
            <Icon name="headphones" size={26} style={styles.imgPlay} />
            <Text style={styles.txtBtn}>Cùng nghe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnInvite} onPress={onListenStory}>
            <Icon name="play" size={26} style={styles.imgPlay} />
            <Text style={styles.txtBtn}>Nghe thử</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.introContainer}>
          <Text style={styles.txtIntro}>Giới thiệu</Text>
          <View style={styles.introContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.txtTitle}>Tác giả</Text>
              <Text style={styles.txtTitle}>Thời lượng</Text>
              <Text style={styles.txtTitle}>Thể loại </Text>
              <Text style={styles.txtTitle}>Đánh giá </Text>
            </View>
            <View>
              <Text style={styles.txtContent}>
                {histories.getStoryDetailsResponse?.author[0]?.author_name}
              </Text>
              <Text style={styles.txtContent}>
                {histories.getStoryDetailsResponse?.audio[0]?.length}
              </Text>
              <Text style={styles.txtContent}>
                {histories.getStoryDetailsResponse?.type[0]?.name}
              </Text>
              <View style={styles.startContent}>{iconRatings}</View>
            </View>
          </View>
        </View>

        <View style={styles.detail}>
          <Text style={styles.txtTitle}>Lời tựa</Text>
          {checkViewAll ? (
            <View>
              <Text style={styles.content}>{histories.getStoryDetailsResponse?.description}</Text>
              <TouchableOpacity onPress={() => onViewAll()}>
                <Text style={styles.viewAll}>Ẩn bớt</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.content} numberOfLines={2}>
                {histories.getStoryDetailsResponse?.description}
              </Text>
              <TouchableOpacity onPress={() => onViewAll()}>
                <Text style={styles.viewAll}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.listViewContainer}>
          <Text style={styles.txtList}>Bạn muốn nghe</Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scvContainer}
          >
            {data.map((item, key) => {
              return <HomeStoryItem item={item} key={key} />;
            })}
          </ScrollView>
          <TouchableOpacity style={styles.commentHeader} onPress={() => setShowReview(!showReview)}>
            <Text style={styles.ratingTitle}>Đánh giá và bình luận</Text>
            <Icon
              color="#000000"
              name={showReview ? 'angle-double-up' : 'angle-double-down'}
              size={24}
            />
          </TouchableOpacity>
          <View style={showReview ? styles.ratingStory : [styles.ratingStory, { display: 'none' }]}>
            <AirbnbRating
              count={5}
              reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
              defaultRating={5}
              size={20}
              onFinishRating={ratingCompleted}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.inputReview}
              onChangeText={(text) => setReview(text)}
              value={review}
              placeholder="Hãy chia sẻ những điều bạn thích về câu chuyện này nhé."
            />
            <TouchableOpacity style={styles.btnSubmit}>
              <Text>Gửi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailStory;

const styles = StyleSheet.create({
  scvContainer: {
    marginTop: 10,
    height: 200,
  },
  inputReview: {
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white',
  },
  ratingStory: {
    backgroundColor: '#F5F5F5',
    marginBottom: 50,
    borderRadius: 10,
  },
  ratingTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginRight: 5,
  },
  commentHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  btnSubmit: {
    width: 80,
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  header: {
    marginTop: -screenHeight * 0.15,
    paddingHorizontal: 18,
    marginBottom: 60,
  },
  imgBackground: {
    width: Dimensions.get('window').width,
    height: screenHeight * 0.19,
    opacity: 0.5,
  },
  storyTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  imgStory: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.3,
    borderRadius: 10,
    marginTop: -50,
  },
  imgStar: {
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
  },
  startTitle: {
    marginLeft: 18,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  btnListen: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.05,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  btnContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgPlay: {
    marginRight: 10,
    color: 'white',
  },
  txtBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnInvite: {
    flexDirection: 'row',
    width: screenWidth * 0.35,
    height: screenHeight * 0.05,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  txtIntro: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  introContent: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  introContainer: {
    marginTop: 20,
  },
  txtDetail: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 40,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  txtContent: {
    fontSize: 16,
    marginTop: 10,
  },
  startContent: {
    flexDirection: 'row',
    marginTop: 15,
  },
  titleContainer: {
    width: 150,
  },
  detail: {
    paddingHorizontal: 40,
    marginTop: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    textAlign: 'justify',
  },
  txtList: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listViewContainer: {
    paddingHorizontal: 20,
  },
});
