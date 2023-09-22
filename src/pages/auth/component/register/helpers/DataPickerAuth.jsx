/* eslint-disable react/prop-types */
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Controller } from "react-hook-form";

function DataPickerAuth({ control, name, text, label, props }) {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                variant="standard"
                value={field.value}
                label={label}
                error={fieldState.invalid}
                helperText={fieldState.invalid ? text : null}
                {...field}
                {...props}
              />
            </DemoContainer>
          </LocalizationProvider>
        );
      }}
    />
  );
}

export default DataPickerAuth;
