import { style } from 'typestyle'

export const homeStyle = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '26px',
  border: '1px solid',
  width: 'calc(100% - 100px)',
  margin: '0 auto',
  $nest: {
    '@media screen and (max-width: 768px)': {
      width: 'calc(100% - 2px)',
      margin: '0 auto'
    }
  }
})

export const rightArrow = style({
  borderTop: '20px solid transparent',
  borderBottom: '20px solid transparent', /* 40px height (20+20) */
  borderLeft: '20px solid green'
})

export const rightMargin = style({
  marginRight: '40px',
  marginTop: '30px',
  fontSize: '26px',
  $nest: {
    '@media screen and (max-width: 768px)': {
      marginRight: 0
    }
  }
})

export const hintStyle = style({
  marginTop: '41px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '20px'
})

export const hintText = style({
  padding: '25px 25px 25px 25px',
  border: '2px dotted black',
  letterSpacing: '10px',
  marginLeft: '5px',
  fontSize: '26px'
})