import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import classNames from "classnames";
import {IconButton} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Button from "@material-ui/core/Button";
import {useHomeStyles} from "../../pages/Home/theme";

import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet} from "../../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../../store/ducks/tweets/selectors";
import {AddFormState} from "../../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows }: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = React.useState<string>('');
    const addFormState = useSelector(selectAddFormState);
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text));
        setText('');
    };

    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя Avatar User`}
                    src='https://sun4-16.userapi.com/s/v1/if1/fWArWawVu8ejYWQYpFmuHH5xqzUXc4peMONywDwJQAY1dAVKDSb7_b6Rk_RcZG09uO_wmg.jpg?size=200x0&quality=96&crop=75,0,561,561&ava=1'
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит?'
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color='primary'>
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color='primary'>
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFromCircleProgress}>
                                <CircularProgress
                                    variant='static'
                                    size={20}
                                    thickness={5}
                                    value={textLimitPercent >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={textLimitPercent >= MAX_LENGTH ? { color: 'red' } : undefined }
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0,0,0,0.1)' }}
                                    variant='static'
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={addFormState === AddFormState.LOADING || !text || textLimitPercent >= MAX_LENGTH}
                        color='primary'
                        variant='contained'
                    >
                        {addFormState === AddFormState.LOADING ? <CircularProgress color='inherit' size={16} /> : 'Твитнуть'}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && (
                <Alert severity="error">Ошибка при добавлении твита :(</Alert>
            )}
        </div>
    );
}