import React, { Component } from "react";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda
} from "@syncfusion/ej2-react-schedule";

class Scheduler extends Component {
  state = {};
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Paris",
        StartTime: new Date(2019, 9, 23, 10, 0),
        EndTime: new Date(2019, 9, 23, 12, 30),
        isReadonly: true,
        color: "black"
      }
    ];
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <ScheduleComponent
          timezone="Europe/Istanbul"
          width="100%"
          height="100%"
          currentView="Month"
          selectedDate={new Date(2019, 9, 23)}
          eventSettings={{ dataSource: this.data }}
          firstDayOfWeek={1}
        >
          <Inject services={[Day, Week, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;
