import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="" alt="img"/>
            </div>
            <img src={props.profile.photos.large} alt="img"/>
            <div className={s.description_block}>{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;