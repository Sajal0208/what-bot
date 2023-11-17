import { Box, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { FieldError, RegisterOptions, useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  name: z.string().min(3).max(20),
  mobile: z.string().min(10).max(10).regex(phoneRegex, 'Invalid Number!'),
})

type TSignupSchema = z.infer<typeof SignupSchema>

const SignupForm = () => {
  const toast = useToast()
  const form = useForm<TSignupSchema>({
    resolver: zodResolver(SignupSchema)
  })

  const { handleSubmit, register, getValues, reset, formState } = form;
  const { errors } = formState

  const isFormValid = () => {
    return Object.keys(errors).length === 0
  }

  const handleRegister = async (values: TSignupSchema) => {
    if(!isFormValid()) return;
    const data = {
      email: values.email,
      password: values.password,
      name: values.name,
      mobile: values.mobile
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/register`, data)
      console.log(response)
      toast({
        title: "Account Created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    } catch (e) {
      console.log(e)
      toast({
        title: "Account Creation Failed.",
        description: "It's not you, it's us.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
  }, [errors]);

  return (
    <Box className="p-4 flex flex-col items-center justify-center border-2 rounded">
      <form onSubmit={handleSubmit(handleRegister)}>
        <FormControl isInvalid={!!errors} >
          <InputWrapper label="Email" inputId='email' inputType='email' placeholder='sajal@gmail.com' registerName='email' register={register} error={errors.email} />
          <InputWrapper label="Password" inputId='password' inputType='password' placeholder='Create Password' registerName='password' register={register} error={errors.password} />
          <InputWrapper label="Name" inputId='name' inputType='text' placeholder='sajal@gmail.com' registerName='name' register={register} error={errors.name} />
          <InputWrapper label="Mobile" inputId='mobile' inputType='text' placeholder='XXXXXXXXXX' registerName='mobile' register={register} error={errors.mobile} />
          <Button type='submit'>Submit</Button>
        </FormControl>
      </form>

    </Box>
  )
}

type InputWrapperProps = {
  register: any,
  registerName: string,
  placeholder: string,
  inputId: string,
  inputType: string,
  label: string
  error: FieldError | undefined
}

const InputWrapper = ({ register, registerName, placeholder, inputId, inputType, label, error }: InputWrapperProps) => {
  const errorMessage = error?.message
  console.log('error', error)
  return (
    <Box className="">
      <FormLabel>{label}</FormLabel>
      <Input id={inputId} type={inputType} placeholder={placeholder} {...register(registerName)} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </Box>
  )
}

export default SignupForm
