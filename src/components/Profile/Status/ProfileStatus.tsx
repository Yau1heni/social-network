import {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string,
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
              <div>
                <span onDoubleClick={activateEditMode}>{props.status || '______'}</span>
              </div>
            }
            {editMode &&
              <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}/>
              </div>
            }
        </div>
    );
};
