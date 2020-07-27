import { style } from 'typestyle'

export const arrow = style({
  marginTop: '40px',
  width: '120px',
  display: 'flex',
  $nest: {
    '@media screen and (max-width: 768px)': {
      marginLeft: '8px'
    },
    '&.is-attempt': {
      marginTop: '25px'
    }
  }
})

export const line = style({
  marginTop: '4px',
  width: '90px',
  background: 'black',
  height: '2px',
  float: 'left',
  $nest: {
    '@media screen and (max-width: 768px)': {
      width: '49px'
    }
  }
})

export const point = style({
  width: '0',
  height: '0',
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
  borderLeft: '8px solid black',
  float: 'right'
})