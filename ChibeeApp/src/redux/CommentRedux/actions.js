import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const CommentTypes = makeConstantCreator(
  'GET_COMMENT',
  'GET_COMMENT_SUCCESS',
  'GET_COMMENT_FAILURE',

  'ADD_COMMENT',
  'ADD_COMMENT_SUCCESS',
  'ADD_COMMENT_FAILURE',

  'REPLY_COMMENT',
  'REPLY_COMMENT_SUCCESS',
  'REPLY_COMMENT_FAILURE',

  'GET_REPLY_COMMENT',
  'GET_REPLY_COMMENT_SUCCESS',
  'GET_REPLY_COMMENT_FAILURE',

  'DELETE_COMMENT',
  'DELETE_COMMENT_SUCCESS',
  'DELETE_COMMENT_FAILURE',
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

const replyComment = (data) => makeActionCreator(CommentTypes.REPLY_COMMENT, { data });
const replyCommentSuccess = (response) =>
  makeActionCreator(CommentTypes.REPLY_COMMENT_SUCCESS, { response });
const replyCommentFailure = (error) =>
  makeActionCreator(CommentTypes.REPLY_COMMENT_FAILURE, { error });

const getReplyComment = (id) => makeActionCreator(CommentTypes.GET_REPLY_COMMENT, { id });
const getReplyCommentSuccess = (response) =>
  makeActionCreator(CommentTypes.GET_REPLY_COMMENT_SUCCESS, { response });
const getReplyCommentFailure = (error) =>
  makeActionCreator(CommentTypes.GET_REPLY_COMMENT_FAILURE, { error });

const deleteComment = (id) => makeActionCreator(CommentTypes.DELETE_COMMENT, { id });
const deleteCommentSuccess = (response) =>
  makeActionCreator(CommentTypes.DELETE_COMMENT_SUCCESS, { response });
const deleteCommentFailure = (error) =>
  makeActionCreator(CommentTypes.DELETE_COMMENT_FAILURE, { error });

export default {
  getComment,
  getCommentSuccess,
  getCommentFailure,

  addComment,
  addCommentSuccess,
  addCommentFailure,

  replyComment,
  replyCommentSuccess,
  replyCommentFailure,

  getReplyComment,
  getReplyCommentSuccess,
  getReplyCommentFailure,

  deleteComment,
  deleteCommentSuccess,
  deleteCommentFailure,
};
