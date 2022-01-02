import React from 'react';
import { StyledNotification } from './styled';
import { TNotificationProps } from './types';

const Notification = ({ children }: TNotificationProps) => (
    <StyledNotification>
        { children }
    </StyledNotification>
);

export default Notification;
