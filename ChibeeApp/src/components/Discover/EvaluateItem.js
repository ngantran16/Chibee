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
  const [viewReply, setViewReply] = useState(false);
  const [reply, setReply] = useState('');
  const current_token = useSelector((state) => state.login.token);

  const onReply = () => {
    const replyData = {
      token: current_token,
      id_comment: props.id_comment,
      content: reply,
    };
    dispatch(CommentActions.replyComment(replyData, onSuccess, onFail));
  };

  const onSuccess = () => {
    dispatch(CommentActions.getComment(props.id_story));
  };

  const onFail = () => {
    console.log('Add reply comment fail');
  };

  const onCommentDelete = () => {
    dispatch(
      CommentActions.deleteComment(props.id_comment, props.onDeleteSuccess, props.onDeleteFail),
    );
  };

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
                  <TouchableOpacity onPress={onCommentDelete}>
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

            {props.replies && props.replies.length > 0 ? (
              <View>
                <TouchableOpacity onPress={() => setViewReply(!viewReply)} style={styles.listReply}>
                  <Text style={styles.txtNumberReply}>
                    {viewReply
                      ? 'Ẩn các phản hồi'
                      : 'Xem ' + props.replies.length + ' phản hồi trước...'}
                  </Text>
                </TouchableOpacity>
                {viewReply ? (
                  <View style={styles.listReply}>
                    {props.replies.map((item, key) => {
                      return (
                        <View key={key} style={styles.replyDisplay}>
                          <Image source={{ uri: item.avatar }} style={styles.imgUserComment} />
                          <View>
                            <Text style={styles.txtAuthor}>{item.full_name}</Text>
                            <View style={styles.star}>
                              <Text style={styles.textPara}>{item.content}</Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                ) : (
                  <></>
                )}
              </View>
            ) : (
              <></>
            )}
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
    paddingRight: 40,
    paddingLeft: 10,
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
    width: screenWidth * 0.8,
  },
  txtDeleteReply: {
    fontSize: 11,
    color: 'red',
  },
});
export default EvaluateItem;
