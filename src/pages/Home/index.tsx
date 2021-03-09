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
import CircularProgress from '@material-ui/core/CircularProgress';

import { Tweet } from '../../components/Tweet';
import { Tags } from '../../components/Tags';
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
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import { Route } from 'react-router-dom';
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "./component/FullTweet";

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
            <Container className={classes.wrapper} maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item sm={1} md={3}>
                        <SideMenu classes={classes} />
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined">
                            <Paper className={classes.tweetsHeaderSticky} style={{ zIndex: 1251 }} variant="outlined">
                                <Route path='/home/:any'>
                                    <BackButton />
                                </Route>
                                <Route path={['/home', '/home/search']} exact>
                                    <Typography variant="h6">Твиты</Typography>
                                </Route>
                                <Route path='/home/tweet'>
                                    <Typography variant="h6">Твитнуть</Typography>
                                </Route>
                            </Paper>
                            <Route path={['/home', '/home/search']} exact>
                                <Paper>
                                    <AddTweetForm classes={classes} />
                                    <div className={classes.addFormBottomLine} />
                                </Paper>
                            </Route>
                            <Route path="/home" exact>
                                {isLoading ? (
                                    <div className={classes.tweetsCentered}><CircularProgress /></div>
                                ) : (
                                    tweets.map((tweet) => (
                                        <Tweet key={tweet._id} classes={classes} {...tweet} />
                                    ))
                                )}
                            </Route>
                            <Route path="/home/tweet/:id" component={FullTweet} exact />
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
                            <Tags classes={classes} />
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