const SignUpFormModel = {
  name: {
    name: 'name',
    errorFormat: 'Vui lòng nhập tên gồm những kí tự hợp lệ',
    errorRequired: 'Vui lòng nhập tên',
  },
  email: {
    name: 'email',
    errorFormat: 'Địa chỉ email không hợp lệ',
    errorRequired: 'Vui lòng nhập email',
  },
  phone: {
    name: 'phone',
    errorFormat: 'Số điện thoại không hợp lệ',
    errorLength: 'Vui lòng nhập số điện thoại gồm 10 hoặc 11 số',
    errorRequired: 'Vui lòng nhập số điện thoại',
  },
  age: {
    name: 'age',
    errorFormat: 'Vui lòng nhập số tuổi hợp lệ',
    errorMin: 'Vui lòng nhập số tuổi lớn hơn',
    errorMax: 'Vui lòng nhập tuổi nhỏ hơn 100',
    errorRequired: 'Vui lòng nhập tuổi',
  },
  password: {
    name: 'password',
    errorRequired: 'Vui lòng nhập mật khẩu',
    errorLess: 'Mật khẩu của bạn ít nhất phải 6 kí tự',
    errorLong: 'Mật khẩu của bạn nên ít hơn 15 kí tự',
  },

  confirmPassword: {
    name: 'confirmPassword',
    errorRequired: 'Vui lòng xác nhận lại mật khẩu',
    errorMatch: 'Mật khẩu không khớp',
  },
};

export default SignUpFormModel;
