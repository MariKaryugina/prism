import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0, 2),
  },
  title: {
    flexGrow: 1,
    overflow: 'visible',
    marginRight: '25px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: '0 20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  buttons: {
    backgroundColor: 'white !important',
    marginRight: '5px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({
  active,
  changeActive,
  changeSearchString,
  vacanciesOpen,
  changeVacanciesVisible,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#111111' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PRISM
          </Typography>
          <Button onClick={changeVacanciesVisible} className={classes.buttons}>
            {vacanciesOpen ? 'users' : 'vacancies'}
          </Button>
          {(!vacanciesOpen) && (
            <React.Fragment>
              <Button onClick={changeActive} disabled={active} className={classes.buttons}>
                all
              </Button>
              <Button onClick={changeActive} disabled={!active} className={classes.buttons}>
                in
              </Button>
            </React.Fragment>)
          }
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={changeSearchString}
            />
          </div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
