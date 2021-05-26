import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { CommentTypes } from './actions';
export const INITIAL_STATE = Immutable({
  dataComment: null,
  errorComment: null,
  loadingComment: false,

  errorAddComment: null,
  loadingAddComment: false,

  responseReply: null,
  errorReply: null,

  loadingGetReply: false,
  responseReplyComment: null,
  errorReplyComment: null,

  loadingDeleteComment: false,
  errorDeleteComment: null,
});
export const getComment = (state, { response }) =>
  state.merge({
    dataComment: null,
    errorComment: null,
    loadingComment: true,
  });
export const getCommentSuccess = (state, { response }) =>
  state.merge({
    dataComment: response.data,
    errorComment: false,
    loadingComment: false,
  });
export const getCommentFailure = (state, { error }) =>
  state.merge({
    errorComment: error,
    loadingComment: false,
  });

export const addComment = (state, { response }) =>
  state.merge({
    errorAddComment: null,
    loadingAddComment: true,
  });
export const addCommentSuccess = (state, { response }) =>
  state.merge({
    errorAddComment: false,
    loadingAddComment: false,
  });
export const addCommentFailure = (state, { error }) =>
  state.merge({
    errorAddComment: error,
    loadingAddComment: false,
  });

export const replyComment = (state, { response }) =>
  state.merge({
    responseReply: null,
    errorReply: null,
  });
export const replyCommentSuccess = (state, { response }) =>
  state.merge({
    responseReply: response,
    errorReply: null,
  });
export const replyCommentFailure = (state, { error }) =>
  state.merge({
    responseReply: null,
    errorReply: error,
  });

export const getReplyComment = (state, { response }) =>
  state.merge({
    loadingGetReply: true,
    responseReplyComment: null,
    errorReplyComment: null,
  });
export const getReplyCommentSuccess = (state, { response }) =>
  state.merge({
    loadingGetReply: false,
    responseReplyComment: response.data,
    errorReplyComment: null,
  });
export const getReplyCommentFailure = (state, { error }) =>
  state.merge({
    loadingGetReply: false,
    errorReplyComment: error,
  });

export const deleteComment = (state, { response }) =>
  state.merge({
    loadingDeleteComment: true,
    errorDeleteComment: null,
  });

export const deleteCommentSuccess = (state, { response }) =>
  state.merge({
    loadingDeleteComment: false,
    errorDeleteComment: null,
  });
export const deleteCommentFailure = (state, { error }) =>
  state.merge({
    loadingDeleteComment: false,
    errorDeleteComment: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [CommentTypes.GET_COMMENT]: getComment,
  [CommentTypes.GET_COMMENT_SUCCESS]: getCommentSuccess,
  [CommentTypes.GET_COMMENT_FAILURE]: getCommentFailure,

  [CommentTypes.ADD_COMMENT]: addComment,
  [CommentTypes.ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [CommentTypes.ADD_COMMENT_FAILURE]: addCommentFailure,

  [CommentTypes.REPLY_COMMENT]: replyComment,
  [CommentTypes.REPLY_COMMENT_SUCCESS]: replyCommentSuccess,
  [CommentTypes.REPLY_COMMENT_FAILURE]: replyCommentFailure,

  [CommentTypes.GET_REPLY_COMMENT]: getReplyComment,
  [CommentTypes.GET_REPLY_COMMENT_SUCCESS]: getReplyCommentSuccess,
  [CommentTypes.GET_REPLY_COMMENT_FAILURE]: getReplyCommentFailure,

  [CommentTypes.DELETE_COMMENT]: deleteComment,
  [CommentTypes.DELETE_COMMENT_SUCCESS]: deleteCommentSuccess,
  [CommentTypes.DELETE_COMMENT_FAILURE]: deleteCommentFailure,
});
export default reducer;
