import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import {ProfileStatus} from '../Status/ProfileStatus';

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} alt="img"/>
            <div className={s.description_block}>
                <ProfileStatus status={props.status} updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;