 import { put, call, takeLatest, select, take } from 'redux-saga/effects';
 import CommentActions, { CommentTypes } from './actions';
 import { getComments } from '../../api/comment';
 function* waitFor(selector) {
   if (yield select(selector)) {
     return;
   } 
   while (true) {
     yield take('*'); 
     if (yield select(selector)) {
       return;
     } 
   }
 }
 export function* getCommentSaga({ id }) {
   try {
         const response = yield call(getComments, id);
         yield put(CommentActions.getCommentSuccess(response));
         yield call(waitFor, (state) => state.comment.dataComment != null);
       } catch (error) {
             yield put(CommentActions.getCommentFailure(error));
           }
         }
 const commentSagas = () => {
       return [takeLatest(CommentTypes.GET_COMMENT, getCommentSaga)];
     };
export default commentSagas();