import React, { Fragment } from "react";

export default (props) => {
    const courseFinish = props.element;

    return (
        <Fragment>
            <div className="shadow p-8 bg-white mr-4 rounded">
                <h4 className="font-bold">{courseFinish.title_}</h4>
                <div className="text-center">
                    <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
                        Url: {courseFinish.url_}
                    </span>
                </div>
            </div>
        </Fragment>
    );

}