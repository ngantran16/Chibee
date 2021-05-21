import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const CommentTypes = makeConstantCreator(
  'GET_COMMENT',
  'GET_COMMENT_SUCCESS',
  'GET_COMMENT_FAILURE',
  'ADD_COMMENT',
  'ADD_COMMENT_SUCCESS',
  'ADD_COMMENT_FAILURE',
);
const getComment = (id, onSuccess, onFail) =>
  makeActionCreator(CommentTypes.GET_COMMENT, { id, onSuccess, onFail });
const getCommentSuccess = (response) =>
  makeActionCreator(CommentTypes.GET_COMMENT_SUCCESS, { response });
const getCommentFailure = (error) => makeActionCreator(CommentTypes.GET_COMMENT_FAILURE, { error });

const addComment = (data) => makeActionCreator(CommentTypes.ADD_COMMENT, { data });
const addCommentSuccess = (response) =>
  makeActionCreator(CommentTypes.ADD_COMMENT_SUCCESS, { response });
const addCommentFailure = (error) => makeActionCreator(CommentTypes.ADD_COMMENT_FAILURE, { error });

export default {
  getComment,
  getCommentSuccess,
  getCommentFailure,
  addComment,
  addCommentSuccess,
  addCommentFailure,
};
