import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import MarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
                            <li className={classes.sideMenuListItem}>
                                <IconButton className={classes.logoIconWrapper} aria-label="" color="primary">
                                    <TwitterIcon className={classes.logo} />
                                </IconButton>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <HomeIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Домой</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <SearchIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Поиск</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <NotificationIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Уведомления</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <MessageIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Сообщения</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <MarkIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Закладки</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <ListIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Список</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <div>
                                    <UserIcon className={classes.sideMenuLIstItemIcon} />
                                    <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Профиль</Typography>
                                </div>
                            </li>
                            <li className={classes.sideMenuListItem}>
                                <Button className={classes.sideMenuTweetButton} variant='contained' color='primary' fullWidth>Твитнуть</Button>
                            </li>
        </ul>
    );
}