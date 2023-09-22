/* eslint-disable no-useless-escape */
import * as YUP from "yup";

const phoneRegExp = /^\d{10}$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validationSchema = YUP.object({
  fatherName: YUP.string().required("اسم الاب حقل مطلوب"),
  motherName: YUP.string().required("اسم الام حقل مطلوب"),
  livingPlace: YUP.string().required("مكان السكن حقل مطلوب"),
  parentPassport: YUP.string().required("جواز سفر الاب حقل مطلوب"),
  email: YUP.string()
    .required("بريد الالكتروني حقل مطلوب")
    .matches(emailRegex, "البريد الالكتروني غير متاح"),
  phoneNumber: YUP.string()
    .required("رقم الهاتف حقل مطلوب")
    .matches(phoneRegExp, "الرقم ليس متاح"),
  password: YUP.string()
    .required("كلمة السر حقل مطلوب")
    .min(8, "كلمة السر يجب ان تحتوي على 8 محارف"),
  students: YUP.array().of(
    YUP.object().shape({
      name: YUP.string().required("اسم الطالب حقل مطلوب"),
      birthday: YUP.string().required("تاريخ الميلاد حقل مطلوب"),
      passport: YUP.string().required("جواز سفر الطالب حقل مطلوب"),
      gradeId: YUP.string().required("الصف الحالي حقل مطلوب"),
    })
  ),
});

export default validationSchema;
