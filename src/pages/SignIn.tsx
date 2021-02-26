import React from 'react';
import { Button, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71c9f8',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    blueSideBigIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '350%',
        height: '350%',
        transform: 'translate(-50%, -50%)',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20, 
    },
    margin: {
        marginBottom: theme.spacing(2),
    },
    loginSideField: {
        marginBottom: 30,
    },
}));

function SignIn() {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <PeopleOutlinedIcon className={classes.blueSideListInfoIcon} />
                            Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <MessageIcon className={classes.blueSideListInfoIcon} />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру проямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleClickOpenSignUp} className={classes.margin} variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>Войти</Button>
                    
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} classes={classes} title='Войти в аккаунт'>
                        <FormControl component='fieldset' fullWidth>
                            <FormGroup aria-label='position' row> 
                                <TextField
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="email"
                                        label="E-mail"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        type="email"
                                        fullWidth
                                />
                                <TextField
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="password"
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        type="password"
                                        fullWidth
                                />
                                <Button className={classes.loginSideField} onClick={handleCloseModal} variant='contained' color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} classes={classes} title='Создайте учетную запись'>
                        <FormControl component='fieldset' fullWidth>
                            <FormGroup aria-label='position' row> 
                                <TextField
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="name"
                                        label="Имя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        type="name"
                                        fullWidth
                                />
                                <TextField
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="email"
                                        label="E-mail"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        type="email"
                                        fullWidth
                                />
                                <TextField
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="password"
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        type="password"
                                        fullWidth
                                />
                                <Button className={classes.loginSideField} variant='contained' color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
}

export default SignIn;