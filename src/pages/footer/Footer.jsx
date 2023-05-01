
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Don’t miss what’s happening</h2>
        <h4>People on Twitter are the first to know.</h4>
      </div>
      <div className={styles.buttons}>
        <Button  sx={{borderRadius:"100px",color:"white",marginRight:"10px"}} variant="contained"><Link style={{color:"white",textDecoration:"none"}}to='/login'>LogIn</Link></Button><br/>
        <Button  sx={{borderRadius:"100px",backgroundColor:"white",color:"black"}} variant="contained"><Link style={{textDecoration:"none"}}to='/register'>Sign up</Link></Button><br/>
      </div>
    </div>
  );
};

export default Footer;
