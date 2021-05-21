import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import CommentActions, { CommentTypes } from './actions';
import { getComments, addComment } from '../../api/comment';

function* waitFor(selector) {
  if (yield select(selector)) {
    return;
  }
  while (true) {
    yield take('*');
    if (yield select(selector)) {
      return;
    }
  }
}
export function* getCommentSaga({ id, onSuccess, onFail }) {
  try {
    const response = yield call(getComments, id);
    yield put(CommentActions.getCommentSuccess(response));
    yield call(waitFor, (state) => state.comment.dataComment != null);
    onSuccess && onSuccess();
  } catch (error) {
    yield put(CommentActions.getCommentFailure(error));
    onFail && onFail();
  }
}

export function* addCommentSaga({ data }) {
  try {
    const response = yield call(addComment, data);
    yield put(CommentActions.addCommentSuccess(response));
    const comments = yield call(getComments, data.id_story);
    yield put(CommentActions.getCommentSuccess(comments));
  } catch (error) {
    yield put(CommentActions.addCommentFailure(error));
  }
}
const commentSagas = () => [
  takeLatest(CommentTypes.GET_COMMENT, getCommentSaga),
  takeLatest(CommentTypes.ADD_COMMENT, addCommentSaga),
];

export default commentSagas();
