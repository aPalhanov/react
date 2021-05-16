/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/



/*
//1
import React from "react";
import { render } from "react-dom";
const node = document.getElementById("root");

const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:mark@ifelse.io" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "...and now it really is!")
    )
  )
);
render(root, node);
*/



/*
//2
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post" //#C
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user, //#D
        React.createElement(
          "span",
          {
            className: "postBody" //#E
          },
          this.props.content //#F
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired, //#G
  content: PropTypes.string.isRequired, //#G
  id: PropTypes.number.isRequired //#G
};

const App = React.createElement(Post, {
  id: 1, //#H
  content: " said: This is a post!!!", //#H
  user: "mark" //#H
});

render(App, node);
*/



/*
//3
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    console.log("yo");
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  })
);

render(App, node);
*/



/*
//4
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
  }
  render() {
    return React.createElement(
      "form",
      {
        className: "createComment"
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?"
      }),
      React.createElement("input", {
        type: "submit",
        value: "Post"
      })
    );
  }
}
CreateComment.propTypes = {
  content: PropTypes.string
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);

render(App, node);
*/




/*
//5
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      user: val
    }));
  }
  handleTextChange(event) {
    const val = event.target.value;
    this.setState({
      content: val
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => ({
      user: "",
      content: ""
    }));
  }
  render() {
    return React.createElement(
      "form",
      {
        className: "createComment",
        onSubmit: this.handleSubmit
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?",
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement("input", {
        type: "submit",
        value: "Post"
      })
    );
  }
}
CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);

render(App, node);
*/




/*
//6
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      user: val
    }));
  }
  handleTextChange(event) {
    const val = event.target.value;
    this.setState({
      content: val
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });

    this.setState(() => ({
      user: "",
      content: ""
    }));
  }
  render() {
    return React.createElement(
      "form",
      {
        className: "createComment",
        onSubmit: this.handleSubmit
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?",
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement("input", {
        type: "submit",
        value: "Post"
      })
    );
  }
}
CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);

render(App, node);
*/





/*
//7
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      user: val
    }));
  }
  handleTextChange(event) {
    const val = event.target.value;
    this.setState({
      content: val
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });

    this.setState(() => ({
      user: "",
      content: ""
    }));
  }
  render() {
    return React.createElement(
      "form",
      {
        className: "createComment",
        onSubmit: this.handleSubmit
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?",
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement("input", {
        type: "submit",
        value: "Post"
      })
    );
  }
}
CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  }
  render() {
    return React.createElement(
      "div",
      {
        className: "commentBox"
      },
      React.createElement(Post, {
        id: this.props.post.id,
        content: this.props.post.content,
        user: this.props.post.user
      }),
      this.state.comments.map(function(comment) {
        return React.createElement(Comment, {
          key: comment.id,
          id: comment.id,
          content: comment.content,
          user: comment.user
        });
      }),
      React.createElement(CreateComment, {
        onCommentSubmit: this.handleCommentSubmit
      })
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

render(
  React.createElement(CommentBox, {
    comments: data.comments,
    post: data.post
  }),
  node
);
*/





//8
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};
class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="postAuthor">{this.props.user}</h2>
        <span className="postBody">{this.props.content}</span>
        {this.props.children}
      </div>
    );
  }
}
Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.user + " : "}</h2>
        <span className="commentContent">{this.props.content}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    this.setState({
      user: event.target.value
    });
  }
  handleTextChange(event) {
    this.setState({
      content: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState({
      user: "",
      content: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="createComment">
        <input
          value={this.state.user}
          onChange={this.handleUserChange}
          placeholder="Your name"
          type="text"
        />
        <input
          value={this.state.content}
          onChange={this.handleTextChange}
          placeholder="Thoughts?"
          type="text"
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  }
  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content={this.props.post.content}
          user={this.props.post.user}
        />
        {this.state.comments.map(function(comment) {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
            />
          );
        })}
        <CreateComment onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

render(<CommentBox comments={data.comments} post={data.post} />, node);
