import {Field, FieldProps} from 'formik';
import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

type FormikTextInputProps = {
  name: string;
};

const borderColors = {
  default: 'black',
  error: 'red',
  success: 'green',
};

const FormikTextInput = ({
  name,
  ...props
}: FormikTextInputProps & TextInputProps) => (
  <Field name={name} {...props}>
    {({form: {handleChange, handleBlur}, meta}: FieldProps) => {
      const gotError = meta.touched && meta.error;
      const isSuccess = !meta.error && meta.touched;
      return (
        <View style={styles.container}>
          <Text style={styles.inputTitle}>{props.placeholder}</Text>
          <View
            style={[
              styles.textInputContainer,
              {
                borderColor:
                  borderColors[
                    gotError ? 'error' : isSuccess ? 'success' : 'default'
                  ],
              },
            ]}>
            <TextInput
              placeholderTextColor={'gray'}
              onChangeText={handleChange(name)}
              onBlur={handleBlur(name)}
              value={meta.value}
              style={[styles.textInput, gotError ? {borderColor: 'red'} : null]}
              {...props}
            />
          </View>
          {gotError && <Text style={styles.error}>{meta.error || ' '}</Text>}
        </View>
      );
    }}
  </Field>
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  error: {
    color: 'red',
    fontStyle: 'italic',
    marginLeft: 12,
    marginTop: 5,
  },
  inputTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    paddingBottom: 6,
  },
  container: {
    marginVertical: 12,
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderRadius: 14,
    fontSize: 14,
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderWidth: 1,
  },
});

export default FormikTextInput;
