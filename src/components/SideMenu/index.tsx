import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home/theme';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import MarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';
import CreateIcon from '@material-ui/icons/Create';

import Hidden from "@material-ui/core/Hidden";
import {ModalBlock} from "../ModalBlock";
import {AddTweetForm} from "../AddTweetForm";


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    const [setVisibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false);

    const handleClickOpenAddTweet = () => {
        setSetVisibleAddTweet(true);
    };

    const onCloseAddTweet = () => {
        setSetVisibleAddTweet(false);
    };

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
                  <Hidden smDown>
                      <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Домой</Typography>
                  </Hidden>
               </div>
             </li>
             <li className={classes.sideMenuListItem}>
                <div>
                  <SearchIcon className={classes.sideMenuLIstItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Поиск</Typography>
                    </Hidden>
                 </div>
              </li>
              <li className={classes.sideMenuListItem}>
                 <div>
                   <NotificationIcon className={classes.sideMenuLIstItemIcon} />
                     <Hidden smDown>
                        <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Уведомления</Typography>
                     </Hidden>
                 </div>
               </li>
               <li className={classes.sideMenuListItem}>
                 <div>
                   <MessageIcon className={classes.sideMenuLIstItemIcon} />
                     <Hidden smDown>
                        <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Сообщения</Typography>
                     </Hidden>
                 </div>
               </li>
               <li className={classes.sideMenuListItem}>
                 <div>
                   <MarkIcon className={classes.sideMenuLIstItemIcon} />
                     <Hidden smDown>
                        <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Закладки</Typography>
                     </Hidden>
                 </div>
               </li>
               <li className={classes.sideMenuListItem}>
                 <div>
                   <ListIcon className={classes.sideMenuLIstItemIcon} />
                     <Hidden smDown>
                        <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Список</Typography>
                     </Hidden>
                 </div>
               </li>
               <li className={classes.sideMenuListItem}>
                  <div>
                    <UserIcon className={classes.sideMenuLIstItemIcon} />
                      <Hidden smDown>
                          <Typography className={classes.sideMenuLIstItemLabel} variant="h6">Профиль</Typography>
                      </Hidden>
                  </div>
                </li>
                <li className={classes.sideMenuListItem}>
                  <Button
                      onClick={handleClickOpenAddTweet}
                      className={classes.sideMenuTweetButton}
                      variant='contained'
                      color='primary'
                      fullWidth
                  >
                      <Hidden smDown>Твитнуть</Hidden>
                      <Hidden mdUp>
                          <CreateIcon />
                      </Hidden>
                  </Button>
                    <ModalBlock onClose={onCloseAddTweet} visible={setVisibleAddTweet} title=''>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </ModalBlock>
                </li>
        </ul>
    );
}