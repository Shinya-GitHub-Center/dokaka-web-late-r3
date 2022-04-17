export default {
  colors: {
    // nothing change (main body color will be changed @ styles/globalStyles.js)
    background: '#15202b',
    // text color except header text and newer older text and post title
    text: '#ffffff',
    // older and newer color & header background color
    primary: '#22303c',
    // tag hover & boder line color
    secondary: '#22303c',
    // posts link hover & page number selector hover & tag color
    tertiary: '#192734',
    // older and newer hover color
    highlight: '#fd6473',
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
