import { useState } from 'react'

import styles from '@/styles/FormPage.module.css'

import { Box, FormControl, FilledInput, FormControlLabel, Checkbox, FormHelperText, Select, MenuItem } from '@mui/material'
import Textarea from '@mui/joy/Textarea'

const ContactForm = ({ value, onChange }) => {
  const [showSelect, setShowSelect] = useState(false)

  const fieldChangeHandler = (fieldName) => {
    return (event) => {
      onChange({
        ...value,
        [fieldName]: event.target.value
      })
    }
  }

  const selectTreatmentChangeHandler = (event) => {
    onChange({
      ...value,
      selectTreatment: event.target.checked
    })
    setShowSelect(event.target.checked)
  }

  const getFullNameError = (fullName) => {
    const trimmedFullName = fullName.trim()

    return trimmedFullName === '' || trimmedFullName.length <= 3
  }

  const getEmailError = (email) => {
    const trimmedEmail = email.trim()
    const expReg = /^[\d\w\-_]+?@[\d\w\-_]+?\.[\w]+$/

    return !expReg.test(trimmedEmail) || trimmedEmail === ''
  }

  const getPhoneError = (phone) => {
    const trimmedPhone = phone.trim()
    const expReg = /^[0-9]*$/

    return !expReg.test(trimmedPhone) || trimmedPhone === ''
  }

  const getMessageError = (message) => {
    const trimmedMessage = message.trim()

    return trimmedMessage === '' || trimmedMessage.length <= 10
  }

  const errors = {
    fullName: getFullNameError(value.fullName),
    email: getEmailError(value.email),
    message: getMessageError(value.message),
    phone: getPhoneError(value.phone)
  }

  // const hasErrors = Object.keys(errors).some(field => !!errors[field])

  return (
    <section>
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.div}>
        <hr className={styles.hr1} />
        <hr className={styles.hr2} />
      </div>
      <Box
        maxWidth={350}
        mx='auto'
        my={2}
        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '600px', columnGap: '20px' }}
      >
        <FormControl fullWidth margin='normal'>
          <FilledInput
            variant='filled'
            placeholder='Full Name'
            disableUnderline
            autoComplete='no'
            value={value.fullName}
            onChange={fieldChangeHandler('fullName')}
            error={!!errors.fullName}
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '8px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
          {errors.fullName ? <FormHelperText>Please complete this required field.</FormHelperText> : ''}
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FilledInput
            variant='filled'
            placeholder='Email'
            disableUnderline
            autoComplete='no'
            value={value.email}
            onChange={fieldChangeHandler('email')}
            error={!!errors.email}
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '8px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
          {errors.email ? <FormHelperText>Please complete this required field.</FormHelperText> : ''}
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FilledInput
            variant='filled'
            placeholder='Phone'
            disableUnderline
            autoComplete='no'
            value={value.phone}
            error={!!errors.phone}
            onChange={fieldChangeHandler('phone')}
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '8px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
          {errors.phone ? <FormHelperText>Enter a valid phone number.</FormHelperText> : ''}
        </FormControl>
        <FormControl
          fullWidth
          margin='normal'
          sx={{ display: 'flex', alignItems: 'flex-end' }}
        >
          <FormControlLabel
            label='Include the treatment that will be given when sending the form:'
            componentsProps={{
              typography: {
                fontFamily: 'inherit',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: 'inherit',
                color: 'rgba(0, 0, 0, 0.6)'
              }
            }}
            control={
              <Checkbox
                color='primary'
                checked={value.receiveAds}
                onChange={selectTreatmentChangeHandler}
              />
            }
          />
          {showSelect && (
            <Select
              value={value.gender}
              onChange={fieldChangeHandler('gender')}
              size='small'
              variant='filled'
              disableUnderline
              sx={{
                borderRadius: 25,
                background: '#f9f9fa',
                paddingLeft: '8px',
                fontFamily: 'inherit',
                minWidth: 110
              }}
              inputProps={{ sx: { paddingTop: '5px' } }}
            >
              <MenuItem value='sr'>Sr.</MenuItem>
              <MenuItem value='sra'>Sra.</MenuItem>
            </Select>)}
        </FormControl>
      </Box>
      <Box
        maxWidth={600}
        mx='auto'
        my={2}
      >
        <FormControl fullWidth margin='normal' sx={{ marginTop: 0 }}>
          <Textarea
            placeholder='Message' minRows={2} variant='plain' value={value.message} onChange={fieldChangeHandler('message')} sx={{
              background: '#f9f9fa',
              paddingLeft: '20px'
            }}
            style={{ '--Textarea-focusedHighlight': 'none' }}
          />
          {errors.message ? <FormHelperText>Please complete this required field.</FormHelperText> : ''}
        </FormControl>
      </Box>
    </section>
  )
}

export default ContactForm
