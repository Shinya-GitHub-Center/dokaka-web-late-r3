export default {
  config: {
    useColorSchemeMediaQuery: 'system',
  },
  colors: {
    // main body color
    background: '#ffffff',
    // text color except header text and newer older text and post title
    text: '#121212',
    // older and newer color & header background color
    primary: '#121212',
    // tag hover color & link hover
    secondary: '#5b8bf7',
    // posts link hover & tag color
    tertiary: '#f3f3f3',
    // older and newer hover & page number selector hover
    highlight: '#5b8bf7',
    // border line color
    bordercol: '#e1e1e1',
    // date & read time color
    timecol: '#707070',
    modes: {
      dark: {
        background: '#25282b',
        text: '#e4e6eb',
        primary: '#41454a',
        secondary: '#fd6473',
        tertiary: '#41454a',
        highlight: '#fd6473',
        bordercol: '#565b62',
        timecol: '#858c97',
      },
      maroon: {
        background: '#2c0e15',
        text: '#c6bdbe',
        primary: '#542832',
        secondary: '#b5244f',
        tertiary: '#8f0e36',
        highlight: '#8f0e36',
        bordercol: '#6c3441',
        timecol: '#808080',
      },
    },
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
