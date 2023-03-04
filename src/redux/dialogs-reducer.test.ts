import {addNewMessageAC, dialogsReducer, InitialStateDialogType} from './dialogs-reducer';

test('add message function', () => {
    const data: InitialStateDialogType = {
        dialogs: [
            {id: '1', name: 'Zheka', avatar: ''},
            {id: '2', name: 'Kalyan', avatar: ''},
            {id: '3', name: 'Toha', avatar: ''}
        ],
        messages: [
            {id: '1', message: 'Hi!', avatar: ''},
            {id: '2', message: 'How are you?', avatar: ''},
            {id: '3', message: 'Hi', avatar: ''},
            {id: '4', message: 'gn', avatar: ''},
            {id: '5', message: 'Yau!', avatar: ''}
        ]
    };
    const newMessage = 'newMessage';
    const newData = dialogsReducer(data, addNewMessageAC(newMessage));

    expect(newData).not.toBe(data);
    expect(newData.messages.length).toBe(data.messages.length + 1);
    expect(newData.messages[5].message).toBe('newMessage');
});