/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

/* eslint-disable react/no-unknown-property */
export default function FileUploadPage({ control, name, text, label, props }) {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState }) => {
        return (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                { borderColor: "red" },
              "& .MuiFormLabel-root": {
                right: "0px",
                transform: "scale(1)",
              },
              "& .MuiFormLabel-root.Mui-error": { color: "gray" },
              "& .MuiFormHelperText-root.Mui-error": { color: "red" },
              "& .MuiInputBase-root": {
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid blue",
                },
              },
            }}
            variant="standard"
            value={field.value}
            label={label}
            error={fieldState.invalid}
            type="file"
            helperText={fieldState.invalid ? text : null}
            {...field}
            {...props}
          />
        );
      }}
    />
  );
}
