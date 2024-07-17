import { Password } from "@mui/icons-material";
import { FormControl, FormHelperText, MenuItem, Select, TextField, TextFieldProps } from "@mui/material";
import { FieldAttributes, FieldProps, useField, useFormikContext } from "formik";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// components/FormikDatePicker.tsx
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
// import { DateInputProps } from "@mui/x-date-pickers/internals/components/PureDateInput";
import { DateTimePickerProps } from "@mui/lab";

// type Props<TInputDate, TDate> = {
//   name: string;
// } & Omit<DatePickerProps<TInputDate, TDate>, "onChange" | "value">;
// type InputElement = HTMLInputElement | HTMLTextAreaElement;
// type InputChangeEvent = React.ChangeEvent<InputElement>;

// import DatePicker from "react-datepicker";



export const EIBTextField: React.FC<FieldAttributes<TextFieldProps>> = ({placeholder,inputProps,hidden,type,label,variant,id,InputLabelProps,InputProps,multiline,rows,disabled,onChange,defaultValue, autoComplete, value, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <TextField className="border-none" placeholder={placeholder} variant={variant} type={type} id={id}
        label={label}  InputLabelProps={InputLabelProps} hidden={hidden} autoComplete={autoComplete}  disabled={disabled}  InputProps={InputProps} multiline={multiline} rows={rows} defaultValue={defaultValue} {...field} value={field.value || ""} helperText={errorText} error={!!errorText}></TextField>

    )
}
   
export const EIBTextarea: React.FC<FieldAttributes<TextFieldProps>> = ({placeholder,inputProps,hidden,type,label,variant,id,InputLabelProps,InputProps,multiline,rows,disabled,onChange,defaultValue, autoComplete, value, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <TextField className=" border-none " placeholder={placeholder} variant={variant} type={type} id={id}
        label={label}  InputLabelProps={InputLabelProps} hidden={hidden} autoComplete={autoComplete}  disabled={disabled}  InputProps={InputProps} multiline={multiline} rows={rows} defaultValue={defaultValue} {...field} value={field.value || ""} helperText={errorText} error={!!errorText}></TextField>

    )
}
   

interface CustomInputProps extends FieldProps {
    type?: string;
    
}

export const CustomInputComponent: React.FC<CustomInputProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    type,
    ...props
}) => {
    const errorText = touched[field.name] && errors[field.name] ? errors[field.name] : "";
    return (
        <div>
            <input className="form-control" type={type} {...field} {...props} />
            <div className="error">{errorText?.toString()}</div>
        </div>
    )
};




