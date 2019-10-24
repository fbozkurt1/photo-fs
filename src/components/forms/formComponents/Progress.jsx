import React from "react";
import "../../../../node_modules/rsuite/dist/styles/rsuite-default.min.css";
import { Steps } from "rsuite";
/*
<Steps current={0} Nothing is done.
<Steps current={1} "Finished" is done.
<Steps current={2} "Finished" and "In progress" are done
*/
const Progress = () => {
  return (
    <div className="row mt-5">
      <div className="col">
        {/*current data will fetch from somewhere*/}
        <Steps current={1}>
          <Steps.Item title="Finished" />
          <Steps.Item title="In progress" />
          <Steps.Item title="Waiting" />
          <Steps.Item title="Waiting" />
        </Steps>
      </div>
    </div>
  );
};

export default Progress;
