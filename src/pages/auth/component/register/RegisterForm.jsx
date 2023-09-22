import TextFieldAuth from "../../../../components/TextFieldAuth";
import validationSchema from "../../validation/register";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import FileUploadPage from "./helpers/FileUpload";
import DataPickerAuth from "./helpers/DataPickerAuth";

function RegisterForm() {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { fields, append } = useFieldArray({
    control,
    name: "students",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextFieldAuth
          name="fatherName"
          label="اسم الاب"
          control={control}
          text={errors.fatherName?.message}
        />
        <TextFieldAuth
          name="motherName"
          label="اسم الام"
          control={control}
          text={errors.motherName?.message}
        />
        <TextFieldAuth
          name="livingPlace"
          label="مكان السكن"
          control={control}
          text={errors.livingPlace?.message}
        />
        <TextFieldAuth
          name="email"
          label="البريد الالكتروني"
          control={control}
          text={errors.email?.message}
        />
        <TextFieldAuth
          name="phoneNumber"
          label="رقم الهاتف"
          control={control}
          text={errors.phoneNumber?.message}
        />
        <TextFieldAuth
          name="password"
          label="كلمة الهاتف"
          control={control}
          text={errors.password?.message}
          icon={true}
          type="password"
        />
        <FileUploadPage
          control={control}
          name="parentPassport"
          label="جواز سفر الاب"
          text={errors.parentPassport?.message}
        />
        <Box>
          {fields.map((student, index) => (
            <div key={student.id}>
              <TextFieldAuth
                name={`students[${index}].name`}
                label={`اسم الطالب ${index + 1}`}
                control={control}
                text={errors.students?.[index]?.name?.message}
              />
              <DataPickerAuth
                name={`students[${index}].birthday`}
                label={`تاريخ ميلاد الطالب ${index + 1}`}
                control={control}
                text={errors.students?.[index]?.birthday?.message}
              />
              <FileUploadPage
                control={control}
                name={`students[${index}].passport`}
                label={`جواز سفر الطالب ${index + 1}`}
                text={errors.students?.[index]?.passport?.message}
              />
              <TextFieldAuth
                name={`students[${index}].gradeId`}
                label={`الصف الحالي للطالب ${index + 1}`}
                control={control}
                text={errors.students?.[index]?.gradeId?.message}
              />
            </div>
          ))}
        </Box>
        <Button onClick={() => append({})}>+</Button>
        <Button type="submit">الضغط</Button>
      </form>
    </>
  );
}

export default RegisterForm;
