/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommentActions from '../../redux/CommentRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const screenWidth = Dimensions.get('screen').width;

const EvaluateItem = (props) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState('');
  const current_token = useSelector((state) => state.login.token);

  const onReply = () => {
    const replyData = {
      token: current_token,
      id_comment: props.id_comment,
      content: reply,
    };
    dispatch(CommentActions.replyComment(replyData));
  };

  useEffect(() => {
    dispatch(CommentActions.getReplyComment(props.id_comment));
  }, [dispatch, props.id_comment]);

  const replyList = useSelector((state) => state.comment.responseReplyComment);
  const fakeData = [
    {
      id: 1,
      name: 'Nguyen Nguyen',
      content: 'Hay qua',
      date: '20/06/2021',
      image: 'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg',
    },
    {
      id: 1,
      name: 'Nguyen Nguyen',
      content: 'Hay qua',
      date: '20/06/2021',
      image: 'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg',
    },
  ];
  return (
    <View style={styles.evaluateContainer}>
      <View style={styles.commentContent}>
        <View style={styles.rowContent}>
          <Image source={{ uri: props.avatar }} style={styles.imgUser} />
          <View style={styles.nameContent}>
            <View style={styles.authorAndDate}>
              <Text style={styles.txtAuthor}>{props.author}</Text>
              <Text style={styles.textDate}>{Moment(props.dateComment).format('DD/MM/YYYY')}</Text>
            </View>

            <View style={styles.star}>
              <Text style={styles.textPara}>{props.content}</Text>
            </View>
            <View>
              <View style={styles.reply}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                  {isLiked ? (
                    <Text style={[styles.txtReply, { color: '#0066FF' }]}>Đã thích</Text>
                  ) : (
                    <Text style={styles.txtReply}>Thích</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsReply(!isReply)}>
                  <Text style={styles.txtReply}>Trả lời</Text>
                </TouchableOpacity>
                {props.token === current_token ? (
                  <TouchableOpacity>
                    <Text style={styles.txtDeleteReply}>Xóa</Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </View>
              {isReply ? (
                <View style={styles.replyContain}>
                  <TextInput
                    style={styles.inputReply}
                    value={reply}
                    onChangeText={(text) => setReply(text)}
                  />
                  <TouchableOpacity style={styles.sendContain} onPress={onReply}>
                    <Icon name="paper-plane" size={20} />
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
            </View>
            <TouchableOpacity style={styles.listReply}>
              <Text style={styles.txtNumberReply}>Xem 8 phản hồi trước...</Text>
              <View>
                {fakeData.map((item, key) => {
                  return (
                    <View key={key} style={styles.replyDisplay}>
                      <Image source={{ uri: item.image }} style={styles.imgUserComment} />
                      <View>
                        <Text style={styles.txtAuthor}>{item.name}</Text>
                        <View style={styles.star}>
                          <Text style={styles.textPara}>{item.content}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imgUserComment: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  commentContent: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  nameContent: {
    marginLeft: 10,
  },
  star: {
    flexDirection: 'row',
    marginRight: 10,
    width: 0.6 * screenWidth,
  },
  txtAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textPara: {
    fontSize: 15,
    fontWeight: '300',
    color: 'black',
  },
  rowContent: {
    flexDirection: 'row',
  },
  iconEdit: {
    marginRight: 10,
  },
  textDate: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
    right: 18,
  },
  reply: {
    flexDirection: 'row',
  },
  txtReply: {
    fontSize: 11,
    marginRight: 10,
    color: 'black',
  },
  txtNumberReply: {
    fontSize: 11,
  },
  inputReply: {
    width: screenWidth * 0.6,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
  },
  replyContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.6,
  },
  sendContain: {
    marginLeft: -screenWidth * 0.08,
  },
  listReply: {
    marginLeft: 20,
  },
  replyDisplay: {
    flexDirection: 'row',
    marginTop: 5,
  },
  authorAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDeleteReply: {
    fontSize: 11,
    color: 'red',
  },
});
export default EvaluateItem;
