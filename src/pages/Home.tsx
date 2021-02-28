import React from 'react';
import { Container, createStyles, Grid, InputAdornment, InputBase, makeStyles, Paper, Theme, Typography, withStyles } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import grey from '@material-ui/core/colors/grey';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu/SideMenu';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 40,
    },
    logoIconWrapper: {
        margin: '15px 0',
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: "inline-flex",
            alignItems: 'center',
            padding: '0 30px 0 10px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.15s ease-in-out',
        },
    },
    sideMenuLIstItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuLIstItemIcon: {
        fontSize: 28,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontweight: 800,
        }
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetsUserColor: {
        color: grey[500],
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -12,
        justifyContent: 'space-between',
        width: 450,
    },   
}));

const SearchTextField = withStyles(() => createStyles({
    input: {
        borderRadius: 30,
        backgroundColor: "#e6ecf0",
        height: 35,
        padding: 0,
    },
  }))(InputBase);

export const Home = () => {
    const classes = useHomeStyles();

    return (
            <Container className={classes.wrapper} maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <SideMenu classes={classes} />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined">
                            <Paper className={classes.tweetsHeader} variant="outlined">
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                            {
                                [...new Array(20).fill(<Tweet 
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    classes={classes}
                                    user={{
                                        fullname: 'Eugeny Trigubovich',
                                        username: 'EugenyTrigubovich',
                                        avatarUrl: 'https://sun4-16.userapi.com/s/v1/if1/fWArWawVu8ejYWQYpFmuHH5xqzUXc4peMONywDwJQAY1dAVKDSb7_b6Rk_RcZG09uO_wmg.jpg?size=200x0&quality=96&crop=75,0,561,561&ava=1'
                                    }}
                                />)]
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <SearchTextField
                            placeholder="Поиск по Твиттеру"
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                      <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Container>
    );
}