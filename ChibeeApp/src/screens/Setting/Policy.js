import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const Policy = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => NavigationUtils.pop()}>
            <Icon name="angle-left" size={24} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Quy định </Text>
          <Text />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Những quy định đối với người sử dụng ứng dụng</Text>
          <Text style={styles.txtContent}>
            <Text style={styles.titleContent}>Điều 1 :</Text> Không dùng từ ngữ đả kích gây ảnh
            hưởng tiêu cực đến người sử dụng ứng dụng.
          </Text>
          <Text style={styles.txtContent}>
            <Text style={styles.titleContent}>Điều 2 : </Text> Bạn có trách nhiệm bảo mật thông tin
            tài khoản bao gồm: Mật khẩu, số điện thoại bảo vệ tài khoản, Email đăng ký tài khoản và
            tài khoản liên kết. Nếu những thông tin trên bị tiết lộ dưới bất kỳ hình thức nào thì
            bạn phải chấp nhận những rủi ro phát sinh.
          </Text>
          <Text style={styles.txtContent}>
            <Text style={styles.titleContent}>Điều 3 :</Text> Cam kết thực hiện trách nhiệm đảm bảo
            sử dụng hợp pháp nội dung thông tin số đưa lên đăng tải trên hệ thống mạng Internet và
            mạng viễn thông.
          </Text>
          <Text style={styles.txtContent}>
            <Text style={styles.titleContent}>Điều 4 :</Text> Bạn được quyền truy cập, chỉnh sửa,
            thay đổi, khóa, xóa thông tin tài khoản của bạn gồm: Tên tài khoản; Mật khẩu; Email; Số
            điện thoại bảo vệ tài khoản; và các tài khoản liên kết để đăng nhập tài khoản.
          </Text>
          <Text style={styles.txtContent}>
            <Text style={styles.titleContent}>Điều 5 :</Text> Thực hiện trách nhiệm khác theo quy
            định pháp luật nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Policy;

const styles = StyleSheet.create({
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.secondary,
  },
  content: {
    paddingHorizontal: 18,
  },
  txtContent: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
    textAlign: 'justify',
    lineHeight: 25,
  },
  titleContent: {
    fontWeight: 'bold',
    color: Colors.secondary,
  },
});
