import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be into state', () => {
        const component = create(<ProfileStatus status="it-kamasutra" updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        expect(instance.props.status).toBe('it-kamasutra');
    });
    test('after creation <span> with status should be displayed', () => {
        const component = create(<ProfileStatus status="it-kamasutra" updateUserStatus={() => {
        }}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).toBeDefined();
    });
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status="it-kamasutra" updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).not.toBeNull();
    });
    test('after creation <input> with status not should be displayed', () => {
        const component = create(<ProfileStatus status="it-kamasutra" updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        expect(() => {
            instance.findByType('input');
        }).toThrow();
    });
    test('<input> should be displayed in edit-mode instead <span>', () => {
        const component = create(<ProfileStatus status="it-kamasutra" updateUserStatus={() => {
        }}/>);
        const instance = component.root;
        const span = instance.findByType('span');
        span.props.onDoubleClick();
        const input = instance.findByType('input');
        expect(input.props.value).toBe('it-kamasutra');
    });
});