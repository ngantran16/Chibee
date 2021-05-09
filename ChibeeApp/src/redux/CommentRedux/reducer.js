 import Immutable from 'seamless-immutable';
 import { makeReducerCreator } from '../../utils/ReduxUtils';
 import {CommentTypes} from './actions';
 export const INITIAL_STATE = Immutable({
       dataComment: null,
       errorComment: null,
       loadingComment: false,
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
 const reducer = makeReducerCreator(INITIAL_STATE, {
         [CommentTypes.GET_COMMENT]: getComment,
         [CommentTypes.GET_COMMENT_SUCCESS]: getCommentSuccess,
         [CommentTypes.GET_COMMENT_FAILURE]: getCommentFailure,
     });
 export default reducer;