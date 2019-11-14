import React, { Component } from "react";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda
} from "@syncfusion/ej2-react-schedule";
import { L10n } from "@syncfusion/ej2-base";
L10n.load({
  "en-US": {
    /*Türkçe karşılıkları  https://github.com/syncfusion/ej2-locale/blob/master/src/tr.json*/
    schedule: {
      title: "Başlık",
      saveButton: "Ekle",
      cancelButton: "Kapat",
      deleteButton: "Sil",
      newEvent: "Randevu Ekle",
      day: "Gün",
      week: "Hafta",
      today: "Bugün",
      month: "Ay",
      agenda: "Ajanda",
      workWeek: "Haftalık Çalışma",
      monday: "Pazartesi"
    }
  }
});
class Scheduler extends Component {
  state = {};
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Paris",
        StartTime: new Date(2019, 9, 23, 10, 0),
        EndTime: new Date(2019, 9, 23, 12, 30)
      }
    ];
  }
  onEventClick(args) {
    let event = this.scheduleObj.getEventDetails(args.element);
    console.log(args.element);

    console.log(event);
  }
  onDataBound() {
    let events = this.scheduleObj.getCurrentViewEvents();
    console.log(events);
  }

  render() {
    return (
      <div className="container">
        <ScheduleComponent
          ref={t => (this.scheduleObj = t)}
          timezone="Europe/Istanbul"
          width="100%"
          height="100%"
          currentView="Month"
          selectedDate={new Date(2019, 9, 23)}
          eventSettings={{ dataSource: this.data }}
          firstDayOfWeek={1}
          dataBound={this.onDataBound.bind(this)}
          eventClick={this.onEventClick.bind(this)}
        >
          <Inject services={[Day, Week, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;
