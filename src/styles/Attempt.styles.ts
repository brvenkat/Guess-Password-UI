import { style } from 'typestyle'

export const spanBody = style({
  marginTop: '41px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '20px',
  alignItems: 'center'
})
export const attemptText = style({
  fontSize: '26px',
  marginRight: '8px',
  marginTop: '20px',
  $nest: {
    '@media screen and (max-width: 768px)': {
      fontSize: '18px',
      marginTop: '25px'
    }
  }
})

export const wholeText = style({
  border: '1px dotted black',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '20px',
  padding: '25px 25px 25px 25px'
})

export const letter = style({
  marginLeft: '8px',
  $nest: {
    '&.is-highlighted': {
      backgroundColor: 'green'
    }
  }
})