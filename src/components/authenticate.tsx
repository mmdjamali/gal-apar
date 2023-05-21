"use client"
import React from 'react'
import { Icons } from './icons'
import { Button, Fade, Input, OutlinedInput, Typography } from '@mui/material'

function Authenticate() {
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState({
    "field" : "",
    "code" : ""
  })

  return (
    <>
      <div
      className='flex flex-col items-center justify-center relative w-[min(100%,320px)] px-4 border sm:border-solid border-neutral-200/75 py-5 rounded-lg'>
        <div
        className='w-full flex items-center justify-center'>
          <Icons.Logo className='text-blue-500 text-[30px]'/>
        </div>

        <form
        onSubmit={(e) => {
          e.preventDefault()

        }}
        className='flex flex-col mt-4 w-full'>
          <Typography
          component={"h1"}
          className='text-[16px] font-medium text-neutral-800/90'>
            Login | Sign Up
          </Typography>

          <Typography
          component={"p"}
          className='text-[12px] text-neutral-800/60 mt-3'>
            Hello!
          </Typography>

          <Typography
          component={"p"}
          className='text-[12px] text-neutral-800/60 mt-1'>
            Please enter your phone number
          </Typography>

          <OutlinedInput
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
          onBlur={() => {
            if(!phoneNumber) {
              setErrors(prev => ({
                ...prev,
                field : "Please fill this field"
              }))
              return
            }

            if(!/^(\+98|0)?9\d{9}$/.test(phoneNumber)){
              setErrors(prev => ({
                ...prev,
                field : "Please enter a valid phone number"
              }))
              return
            }
            
            setErrors(prev => ({
              ...prev,
              field : ""
            }))
          }}
          error={!!errors.field}
          sx={{
            "& input" : {
              paddingBlock : "12px"
            }
          }}
          className='mt-4 text-[12px] py-0' />

          <Fade in={!!errors.field}>
            <Typography
            component={"p"}
            color="error"
            className='text-[12px]'>
              {errors.field}
            </Typography>
          </Fade>

          <Button
          disabled={loading}
          className="mt-6 py-2 text-[14px] capitalize"
          fullWidth
          variant='contained'>
            {loading ? <Icons.Spinner className="animate-spin text-[25px]"/> : "Enter"}
          </Button>

        </form>
      </div>
    </>
  )
}

export default Authenticate