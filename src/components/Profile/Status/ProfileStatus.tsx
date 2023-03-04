import {ChangeEvent, FC, useEffect, useState} from 'react';

type PropsType = {
    status: string,
    updateUserStatus: (status: string) => void
}

export const ProfileStatus: FC<PropsType> = ({status, updateUserStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setNewStatus] = useState(status);

    useEffect(() => {
        setNewStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(newStatus);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
              <div>
                <span onDoubleClick={activateEditMode}>{status || '______'}</span>
              </div>
            }
            {editMode &&
              <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={newStatus}/>
              </div>
            }
        </div>
    );
};
