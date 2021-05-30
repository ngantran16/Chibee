import * as yup from 'yup';
import SignUpFormModel from './validationFormModel';

const { name, email, phone, age, password, confirmPassword } = SignUpFormModel;
const phoneRegExp = /^(\s*|\d+)$/;

const SignUpFormValidation = yup.object().shape({
  [name.name]: yup
    .string()
    .required(`${name.errorRequired}`)
    .matches(/^[A-Za-z ]*$/, `${name.errorFormat}`),

  [email.name]: yup.string().required(`${email.errorRequired}`).email(`${email.errorFormat}`),

  [phone.name]: yup
    .string()
    .matches(phoneRegExp, `${phone.errorFormat}`)
    .required(`${phone.errorRequired}`)
    .min(10, `${phone.errorLength}`)
    .max(11, `${phone.errorLength}`),

  [age.name]: yup
    .string()
    .matches(phoneRegExp, `${age.errorFormat}`)
    .required(`${age.errorRequired}`)
    .min(1, `${age.errorMin}`)
    .max(2, `${age.errorMax}`),

  [password.name]: yup
    .string()
    .required(`${password.errorRequired}`)
    .min(6, `${password.errorLess}`)
    .max(15, `${password.errorLong}`),

  [confirmPassword.name]: yup
    .string()
    .required(`${confirmPassword.errorRequired}`)
    .oneOf([yup.ref('password'), null], `${confirmPassword.errorMatch}`),
});
export default SignUpFormValidation;
