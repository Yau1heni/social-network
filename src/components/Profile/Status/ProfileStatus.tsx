import React, {ChangeEvent} from 'react';

export type StatusPropsType = {
    status: string
    updateStatus?: (newMess: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}


export class ProfileStatus extends React.Component<StatusPropsType> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    };

    editModeOn = () => {
        this.setState({
            editMode: true
        });
    };


    editModeOff = () => {
        this.setState({
            editMode: false
        });
        if (this.props.updateStatus) {
            this.props.updateStatus(this.state.status ? this.state.status : 'none');
        }
    };


        onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            this.setState({
                status: e.currentTarget.value
            });
        };
    /*
        componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<StateType>) {
            if (prevProps.status !== this.props.status) {
                this.setState(
                    {status: this.props.status}
                );
            }
        }*/

    render() {
        return (
            <>
                {this.state.editMode ? <div>
                        <input onBlur={this.editModeOff}
                               onChange={this.onChangeStatus}
                               type="text"
                               autoFocus={true}
                               value={this.state.status ? this.state.status : ''}/>
                        <button onClick={this.editModeOff}>Save</button>
                    </div> :
                    <div onDoubleClick={this.editModeOn}>status: {this.state.status ? this.state.status : ''}</div>
                }

            </>);

    }
}
