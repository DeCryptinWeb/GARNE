import classes from './styles.css'

export default ({children}) => {
  return (
    <div className={classes.pageWrapper}>
      {children}
    </div>
  )
}
