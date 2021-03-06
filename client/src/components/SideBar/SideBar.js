import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';

import useStyles from './styles';
import { Context } from '../../context/Context';

function SideBar({ sidePosts }) {
  const classes = useStyles();

  const { user } = useContext(Context);
  return (
    <div className={classes.sideBar}>

<h2>The house is filled with the best</h2>
      <hr></hr>
      <h3> Feed it folks ! </h3>
      <hr></hr>

      <div className={classes.userLogin}>
        {user ? (
          <div className={classes.wrapper}>
            <form className={classes.addPostForm}>
              <Button
                variant="outlined"
                color="default"
                size="large"
                href="/post-create"
              >
                <AddCircle style={{ marginRight: '10px' }} />
                Write Post
              </Button>
            </form>
          </div>
        ) : (
          <>
            <Typography
              variant="h6"
              align="center"
              style={{
                borderBottom: '3px #2f3640 solid',
                marginBottom: '0.7rem',
              }}
            >
              Account
            </Typography>

            <Link to={`/login`} style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                style={{ marginBottom: '1rem' }}
              >
                Login
              </Button>
            </Link>
            <Link to={`/register`} style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="secondary" fullWidth>
                Sign up
              </Button>
            </Link>
          </>
        )}
      </div>
      <span className={classes.catsTitle}>categories</span>
      <div className={classes.sideBarItem}>
        <ul className={classes.sideBarList}>
          <Link to="/?cat=Science" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Science</li>
          </Link>

          <Link to="/?cat=Sports" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Sports</li>
          </Link>

          <Link to="/?cat=Tech" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Tech</li>
          </Link>

          <Link to="/?cat=Business" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Business</li>
          </Link>

          <Link to="/?cat=Music" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Music</li>
          </Link>

          <Link to="/?cat=Entertainment" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Entertainment</li>
          </Link>

          <Link to="/?cat=Art" className={classes.catsLink}>
            <li className={classes.sideBarListItem}>Art</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

//  <div className={classes.root}>
//    {images.map((cat) => (
//      <ButtonBase
//        focusRipple
//        key={cat.name}
//        className={classes.image}
//        focusVisibleClassName={classes.focusVisible}
//        style={{ width: '40%' }}
//        src={`/?cat=${cat.name}`}
//      >
//        <span
//          className={classes.imageSrc}
//          style={{
//            backgroundImage: `url(${cat.url})`,
//          }}
//        />
//        <span className={classes.imageBackdrop} />
//        <span className={classes.imageButton}>
//          <Typography
//            component="span"
//            variant="subtitle1"
//            color="inherit"
//            className={classes.imageTitle}
//          >
//            {cat.title}
//            <span className={classes.imageMarked} />
//          </Typography>
//        </span>
//      </ButtonBase>
//    ))}
//  </div>;

export default SideBar;
