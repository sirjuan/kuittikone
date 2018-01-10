import React from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'
import Form from './Form';
import color from 'color';

const styles = (colors) => {
  const { primary, secondary, third } = colors;
  if (!primary || !secondary || !third) return {}
  const darken = col => color(col).darken(0.2).hex();
  const chooseColor = ({primary, secondary, third}) => color(primary).dark() === color(secondary).dark() ? third : secondary
  const stripeColor = col => `${color(col).fade(0.5).desaturate(0.3).lightness(70).string()} !important`

  return {
    header: {
      background: primary,
      color: chooseColor(colors)
    },
    headerButton: {
      color: secondary,
      border: darken(third),
      background: third,
      '&:hover' : {
        background: darken(third),
        border:  darken(third),
      }
    },
    addButton: {
      color: third,
      '&:hover' : {
        color: darken(third)
      }
    },
    saveButton: {
      color: secondary,
      background: third,
      border: third,
      '&:hover' : {
        background: darken(third),
        border: darken(third),
        color: secondary
      }
    },
    stripedRow: {
      background: stripeColor(primary)
    }
  }
}

const StyledForm = injectSheet(styles)(Form)

const AddReceiptFormThemed = ({colors, ...props}) => (
  <ThemeProvider theme={colors}>
    <StyledForm {...props} />
  </ThemeProvider>
)

export default AddReceiptFormThemed;
