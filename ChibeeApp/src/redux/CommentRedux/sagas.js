import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import CommentActions, { CommentTypes } from './actions';
import {
  getComments,
  addComment,
  replyComment,
  getReplyComment,
  deleteComment,
} from '../../api/comment';

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

export function* replyCommentSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(replyComment, data);
    yield put(CommentActions.replyCommentSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(CommentActions.replyCommentFailure(error));
    onFail && onFail();
  }
}

export function* getReplyCommentSaga({ id }) {
  try {
    const response = yield call(getReplyComment, id);
    yield put(CommentActions.getReplyCommentSuccess(response));
  } catch (error) {
    yield put(CommentActions.getReplyCommentFailure(error));
  }
}

export function* deleteCommentSaga({ id, onSuccess, onFail }) {
  try {
    const response = yield call(deleteComment, id);
    yield put(CommentActions.deleteCommentSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(CommentActions.deleteCommentFailure(error));
    onFail && onFail();
  }
}

const commentSagas = () => [
  takeLatest(CommentTypes.GET_COMMENT, getCommentSaga),
  takeLatest(CommentTypes.ADD_COMMENT, addCommentSaga),
  takeLatest(CommentTypes.REPLY_COMMENT, replyCommentSaga),
  takeLatest(CommentTypes.GET_REPLY_COMMENT, getReplyCommentSaga),
  takeLatest(CommentTypes.DELETE_COMMENT, deleteCommentSaga),
];

export default commentSagas();
