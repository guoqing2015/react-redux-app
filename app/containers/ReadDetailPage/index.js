import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import { Link, CacheLink, Control } from 'react-keeper';
import Inputs from 'components/HighOrderComponent/Inputs';

// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';


import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {queryComment, addComment} from '../../redux/modules/Comment/modules/actions';
import { makeSelectCommentList, makeSelectIsCommentSuccess, makeSelectLoading, makeSelectError } from '../../redux/modules/Comment/modules/selectors';

import './index.scss';

export class ReadDetailPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    }

    this.addComment = this.addComment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
     if(!this.props.isCommentSuccess && nextProps.isCommentSuccess) { //登录失败
       //this.props.handleChange({
       //  name: "comment",
       //  value: ""
       //});
       toast.info('评论发表成功');
       this.props.queryComment({
         "contentid": this.props.params.id,
         "statuss": "0,1",  // -1:屏蔽 0:待审核 1:通过
       });
    }

  }

  componentDidMount() {
    const id  = this.props.params.id;
    const detail = sessionStorage.getItem('READ_DETAEL_'+ id);
    this.setState({detail: JSON.parse(detail)});
    this.props.queryComment({
      "contentid": id,
      "statuss": "0,1",  // -1:屏蔽 0:待审核 1:通过
    });
  }

  addComment(){
    const {username, userid, headportrait} = this.props.user;
    this.props.addComment({
      "contentid": this.props.params.id,
      "star": 5,
      "content": this.props.inputs.comment,
      "userid": userid,
      "username": username,
      "userphoto": headportrait
    })
  }

  render() {
    const {loading, handleChange, inputs, commentList} = this.props;
    const {detail} = this.state;

    return (
      <div>
        <Helmet>
          <title>资讯详情</title>
          <meta name="description" content="资讯详情"/>
        </Helmet>

        <Loader active={loading}/>

        <div className="read-detail ">
          {
            detail &&
          <article>
            <header>
              <h1>{detail.contenttitle}</h1>
              <p>发布时间:<time pubdate="true">{detail.createtime}</time></p>
              <p>阅读：{detail.hits}</p>
            </header>

            <section>
              <p>{detail.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: detail.description }} >
            </div>
            </section>
          </article>
          }

          { commentList && commentList.length > 0 &&
          <div className="read-detail__comment">
            <h3>评论</h3>
            <ul>
              {
              commentList.map((item, index) => (
                <li className="d-flex border-bottom" key={`comment-${index}`}>
                  <div className="header-wrap">
                    <img src={item.userphoto} alt=""/>
                  </div>
                  <div className="col">
                    <p className="clearfix">
                      <span className="username">{item.username}</span>
                      <span className="createtime">{item.createtime}</span>
                    </p>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
            }

          <footer className="read-detail__footer d-flex border-top">
            <div className="col align-self-center">
              <input name="comment" value={inputs.comment} onChange={handleChange} type="text" placeholder="说点啥吧！" />
            </div>
            <button onClick={this.addComment}>评论</button>
          </footer>
        </div>

        <ToastContainer />

      </div>
    );
  }
}

ReadDetailPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  commentList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  isCommentSuccess: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  commentList: makeSelectCommentList(),
  isCommentSuccess: makeSelectIsCommentSuccess()
});


export function mapDispatchToProps(dispatch) {
  return {
    queryComment: (param) => {
      dispatch(queryComment(param))
    },
    addComment: (param) => {
      dispatch(addComment(param))
    },
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(ReadDetailPage);

export default connect(mapStateToProps, mapDispatchToProps)( compose(
  Inputs
)(ReadDetailPage));
