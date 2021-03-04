import React from 'react';
import {
    Container,
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import {AddTweetForm} from "../../components/AddTweetForm";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();

    return (
            <Container className={classes.wrapper} maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item sm={1} md={3}>
                        <SideMenu classes={classes} />
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined">
                            <Paper className={classes.tweetsHeaderSticky} style={{ zIndex: 1251 }} variant="outlined">
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                            <Paper>
                                <AddTweetForm classes={classes} />
                                <div className={classes.addFormBottomLine} />
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
                    <Grid item sm={3} xs={3}>
                        <div className={classes.rightSide}>
                            <SearchTextField
                                variant='outlined'
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
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                    <b>актуальные темы</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary='Новосибирск'
                                            secondary={
                                                <Typography component='span' variant='body2'>
                                                    Твиттов: 6 666
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component='li' />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary='#весна'
                                            secondary={
                                                <Typography component='span' variant='body2'>
                                                    Твитов: 2 000 000
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component='li' />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary='#ГорныйАлтай'
                                            secondary={
                                                <Typography component='span' variant='body2'>
                                                    Твитов: 2 000 000 000
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component='li' />
                                </List>
                            </Paper>
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                    <b>Кого читать</b>
                                    <List>
                                        <ListItem className={classes.rightSideBlockItem}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt='Герман Артамонов'
                                                    src='https://sun4-16.userapi.com/s/v1/if1/fWArWawVu8ejYWQYpFmuHH5xqzUXc4peMONywDwJQAY1dAVKDSb7_b6Rk_RcZG09uO_wmg.jpg?size=200x0&quality=96&crop=75,0,561,561&ava=1'
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary='Супер история'
                                                secondary={
                                                    <Typography component='span' variant='body2'>
                                                        @GermanArtamonov
                                                    </Typography>
                                                }
                                            />
                                            <Button color='primary'>
                                                <PersonAddIcon />
                                            </Button>
                                        </ListItem>
                                        <Divider component='li' />
                                    </List>
                                </Paper>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
    );
};