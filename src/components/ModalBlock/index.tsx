import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from "@material-ui/core";
import CloseButton from '@material-ui/icons/CloseOutlined';
import { useStylesSignIn } from '../../pages/SignIn';

interface ModalBlockProps {
    title?: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({ title, onClose, visible = false, children }: ModalBlockProps): React.ReactElement | null => {

    if (!visible) {
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose} >
                    <CloseButton style={{ fontSize: 26 }} color='primary' />
                </IconButton>
                {title}      
            </DialogTitle>
            <DialogContent>
                  {children}         
            </DialogContent>
        </Dialog>
    );
}