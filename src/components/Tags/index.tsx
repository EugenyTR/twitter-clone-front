import React from 'react';

import { useHomeStyles } from '../../pages/Home/theme';
import { Paper, Typography } from '@material-ui/core';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider";
import {useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from "../../store/ducks/tags/selectors";
import {Link} from "react-router-dom";

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {items.map((obj) => (
                    <React.Fragment key={obj._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${obj.name}`}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component='span' variant='body2'>
                                            Твиттов: {obj.count}
                                        </Typography>
                                    }
                                />
                            </Link>
                        </ListItem>
                        <Divider component='li' />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
};