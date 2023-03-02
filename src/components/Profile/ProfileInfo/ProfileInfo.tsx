import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileStatus} from '../Status/ProfileStatus';
import {ProfileInfoType} from '../../../redux/profile-reducer';

type PropsType = {
    profile: ProfileInfoType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} alt="img"/>
            <div className={s.description_block}>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;