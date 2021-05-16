/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
const screenWidth = Dimensions.get('screen').width;

const EvaluateItem = (props) => {
  console.log('*************************************************')
  console.log(props.dateComment)
  return (
    <View style={styles.evaluateContainer}>
      <View style={styles.commentContent}>
        <View style={styles.rowContent}>
          <Image source={{ uri: props.avatar }} style={styles.imgUser} />
          <View style={styles.nameContent}>
            <Text style={styles.txtAuthor}>{props.author}</Text>
            <View style={styles.star}>
              <Text style={styles.textPara}>{props.content}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowContent}>
          <View>
            <Text style={styles.textDate}>{Moment(props.dateComment).format('DD/MM/YYYY')}</Text>
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
});
export default EvaluateItem;
