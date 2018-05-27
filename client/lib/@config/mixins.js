module.exports = {
  // use it in CSS file via @mixin clearfix
  clearfix: {
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    }
  }
}
