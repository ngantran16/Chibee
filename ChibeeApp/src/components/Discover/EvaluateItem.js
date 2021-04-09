/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Images from '../../themes/Images';
import Icon from 'react-native-vector-icons/FontAwesome';

const EvaluateItem = (props) => {
  return (
    <View style={styles.evaluateContainer}>
      <View style={styles.commentContent}>
        <View style={styles.rowContent}>
          <Image source={Images.avatar} style={styles.imgUser} />
          <View style={styles.nameContent}>
            <Text style={styles.txtAuthor}>{props.author}</Text>
            <View style={styles.star}>
              <Text style={styles.textPara}>{props.content}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowContent}>
          <View>
            {props.isFirst ? (
              <View style={styles.rowContent}>
                <Icon name="edit" size={23} style={styles.iconEdit} />
                <Icon name="trash" size={23} />
              </View>
            ) : (
              <View>
                <Text style={styles.textDate}>20/10/2021</Text>
              </View>
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
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
  },
});
export default EvaluateItem;
