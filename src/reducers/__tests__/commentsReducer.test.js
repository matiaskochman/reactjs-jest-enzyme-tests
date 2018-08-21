import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT',() => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    let prevState = [];
    const newState = commentsReducer(prevState, action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type',() => {
    const action = {
        type: 'RRRRR',
        payload: 'New Coment'
    }

    let prevState = [];

    const newState = commentsReducer(prevState, action);

    expect(newState).toEqual([]);
});