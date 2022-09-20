import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialog}>Dimych</div>
                <div className={s.dialog}>Zheka</div>
                <div className={s.dialog}>Victor</div>
                <div className={s.dialog}>Vasya</div>
                <div className={s.dialog}>Anton</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    );
};

export default Dialogs;