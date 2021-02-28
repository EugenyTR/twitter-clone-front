import React from 'react';

import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import { useHomeStyles } from '../../pages/Home';
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };

}

export const Tweet: React.FC<TweetProps> = ({ classes, text, user }: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватрка пользователя ${user.fullname}`} src={user.avatarUrl} />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetsUserColor}>@{user.username}</span>&nbsp;
                        <span>.</span>&nbsp;
                        <span className={classes.tweetsUserColor}>1 ч</span>
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton color='primary'>
                                    <CommentIcon />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <RepeatIcon />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <FavoriteIcon />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <ShareIcon />
                                </IconButton>
                            </div>
                        </div>
                </Grid>
            </Grid>
        </Paper>
    );
}