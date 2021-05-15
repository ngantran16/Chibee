 import Immutable from 'seamless-immutable';
 import { makeReducerCreator } from '../../utils/ReduxUtils';
 import {CommentTypes} from './actions';
 export const INITIAL_STATE = Immutable({
       dataComment: null,
       errorComment: null,
       loadingComment: false,
       errorAddComment: null,
       loadingAddComment: false,
     });
 export const getComment = (state, { response }) =>
   state.merge({
         dataComment: null,
         errorComment: null,
         loadingComment: true,
       });
 export const getCommentSuccess = (state, { response }) =>
   state.merge({
         dataComment: response.data,
         errorComment: false,
         loadingComment: false,
       });
 export const getCommentFailure = (state, { error }) =>
   state.merge({ 
     errorComment: error, 
     loadingComment: false 
 });

 export const addComment = (state, { response }) =>
   state.merge({
         errorAddComment: null,
         loadingAddComment: true,
       });
 export const addCommentSuccess = (state, { response }) =>
   state.merge({
         errorAddComment: false,
         loadingAddComment: false,
       });
 export const addCommentFailure = (state, { error }) =>
   state.merge({ 
     errorAddComment: error, 
     loadingAddComment: false 
 });
 const reducer = makeReducerCreator(INITIAL_STATE, {
         [CommentTypes.GET_COMMENT]: getComment,
         [CommentTypes.GET_COMMENT_SUCCESS]: getCommentSuccess,
         [CommentTypes.GET_COMMENT_FAILURE]: getCommentFailure,
         [CommentTypes.ADD_COMMENT]: addComment,
         [CommentTypes.ADD_COMMENT_SUCCESS]: addCommentSuccess,
         [CommentTypes.ADD_COMMENT_FAILURE]: addCommentFailure,
     });
 export default reducer;