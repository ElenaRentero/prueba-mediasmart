import styles from '@/styles/FormPage.module.css'

import { Box, FormControl, FilledInput, FormControlLabel, Checkbox } from '@mui/material'
import Textarea from '@mui/joy/Textarea'

const ContactForm = ({ value, onChange }) => {
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
  }

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
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '20px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FilledInput
            variant='filled'
            placeholder='Email'
            disableUnderline
            autoComplete='no'
            value={value.email}
            onChange={fieldChangeHandler('email')}
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '20px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FilledInput
            variant='filled'
            placeholder='Phone'
            disableUnderline
            autoComplete='no'
            value={value.phone}
            onChange={fieldChangeHandler}
            sx={{
              borderRadius: 25,
              background: '#f9f9fa',
              paddingLeft: '20px',
              fontFamily: 'inherit',
              fontSize: '100%',
              fontWeight: 'inherit',
              lineHeight: 'inherit'
            }}
            inputProps={{ sx: { paddingTop: '8px' } }}
          />
        </FormControl>
        <FormControl
          fullWidth
          margin='normal'
        >
          <FormControlLabel
            label='Include the treatment that will be given when sending the form.'
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
        </FormControl>
      </Box>
      <Box
        maxWidth={600}
        mx='auto'
        my={2}
      >
        <FormControl fullWidth margin='normal' sx={{ marginTop: 0 }}>
          <Textarea
            placeholder='Message' minRows={2} variant='plain' sx={{
              background: '#f9f9fa',
              paddingLeft: '20px'
            }}
            style={{ '--Textarea-focusedHighlight': 'none' }}
          />
        </FormControl>
      </Box>
    </section>
  )
}

export default ContactForm
