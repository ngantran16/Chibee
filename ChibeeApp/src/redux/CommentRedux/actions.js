 import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
 export const CommentTypes = makeConstantCreator(
       'GET_COMMENT',
       'GET_COMMENT_SUCCESS',
       'GET_COMMENT_FAILURE',
     );
 const getComment = (id) => makeActionCreator(CommentTypes.GET_COMMENT, {id});
 const getCommentSuccess = (response) =>
   makeActionCreator(CommentTypes.GET_COMMENT_SUCCESS, { response });
 const getCommentFailure = (error) =>
   makeActionCreator(CommentTypes.GET_COMMENT_FAILURE, { error });
 export default {
         getComment,
         getCommentSuccess,
         getCommentFailure,
     };