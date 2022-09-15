import React from "react";
import { useState } from "react";
import Comment from "./Comment";
import { comments } from "../libs/comments";
import Reply from "./Reply";

export default function PostOwner(props) {
  const [likes, setLikes] = useState(0);
  const [repl, setRepl] = useState([]);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={props.imgUrl}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            ></img>
            <span className="fw-semibold fs-5">Thirachai Ngaoju 640610628</span>
          </div>
          <span>วันพีซน่ะมีอยู่จริง แต่คนรักจริงไม่มีอยู่เลย</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
        </div>
      </div>

      <Comment
        userImagePath={comments.userImagePath}
        userName={comments.userName}
        commentText={comments.commentText}
        likeNum={comments.likeNum}
      />
      <Reply
        img={comments.userImagePath}
        name={comments.userName}
        text={comments.commentText}
      />
    </div>
  );
}
