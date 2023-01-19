import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comment.length > 0 && (
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4 text-slate-900 dark:text-white">
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="border-b border-gray-200 mb-4 pb-4">
              <p className="mb-4 text-slate-900 dark:text-white">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {comment.name}
                </span>
                {' '}
                on 
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
