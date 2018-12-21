import React from "react";

function ReplyBox(props) {
    return (
        <div className="row reply">
            <div className="col-sm-1 col-xs-1 reply-emojis">
                <i className="fa fa-smile-o fa-2x"></i>
            </div>
            <div className="col-sm-9 col-xs-9 reply-main">
                <form>
                    <textarea className="form-control" rows="1" id="comment"></textarea>
                </form>

            </div>
            <div className="col-sm-1 col-xs-1 reply-recording">
                <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
            </div>
            <div className="col-sm-1 col-xs-1 reply-send">
                <i className="fa fa-send fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}
export default ReplyBox;