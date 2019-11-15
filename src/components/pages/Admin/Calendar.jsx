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
      start: "Başlangıç",
      end: "Bitiş",
      location: "Yer",
      repeats: "Tekrar Et",
      allDay: "Tüm Gün",
      description: "Açıklama",
      daily: "Günlük",
      weekly: "Haftalık",
      monthly: "Aylık",
      never: "Asla",
      timezone: "Saat dilimi",
      recurrence: "yinelenme"
    }
  }
});
class Scheduler extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      datas: []
    };
    this.data = [
      {
        Id: 2,
        Subject: "Paris",
        StartTime: new Date(2019, 10, 23, 10, 0),
        EndTime: new Date(2019, 10, 23, 12, 30)
      }
      // {
      //   Id: 3,
      //   Subject: "Lyon",
      //   StartTime: new Date(2019, 10, 26, 10, 0),
      //   EndTime: new Date(2019, 10, 26, 12, 30)
      // },
      // {
      //   Id: 4,
      //   Subject: "Nice",
      //   StartTime: new Date(2019, 10, 25, 10, 0),
      //   EndTime: new Date(2019, 10, 25, 12, 30)
      // }
    ];
  }

  onActionComplete(Obj) {
    let requestType = Obj.requestType;
    switch (requestType) {
      case "eventCreated":
        this.addItem(Obj.addedRecords[0]);
        break;
      case "eventChanged":
        this.updateItem(Obj.changedRecords[0]);
        break;
      case "eventRemoved":
        this.removeItem(Obj.deletedRecords[0]);
        break;
      default:
        break;
    }
    console.log(this.state.datas);
  }
  //Event ekleme
  addItem = item => {
    console.log("Add Item ");
    this.setState({
      datas: [...this.state.datas, item]
    });
  };
  //Event Düzenleme
  updateItem = item => {
    console.log("Update Item");
    const updateId = item.Id;
    let index = this.state.datas.findIndex(x => x.Id === updateId);
    if (index) {
      this.setState(state => {
        state.datas[index] = item;
      });
    }
  };
  //Event Silme
  removeItem = item => {
    console.log("Remove Item");
    const removeId = item.Id;
    let index = this.state.datas.findIndex(x => x.Id === removeId);

    //Filter  tarayıp yeni dizi oluştuyor. Alternatif bulunacak
    this.setState({
      datas: this.state.datas.filter((_, i) => i !== index)
    });
  };
  onEventClick(args) {
    // let event = this.scheduleObj.getEventDetails(args.element);
    // console.log(args.element);
    // console.log(event);
  }
  onDataBound() {
    // let events = this.scheduleObj.getCurrentViewEvents();
    // console.log(events);
  }

  //Arrange the color of disabled cells previous dates
  onRenderCell(args) {
    if (args.date < new Date(Date.now()).setHours(0, 0, 0, 0)) {
      args.element.style.backgroundColor = "grey";
    }
  }
  //Disable to Popup Editor
  onPopupOpen(args) {
    if (args.data.name === "cellClick") {
      if (args.data.startTime < new Date(Date.now())) {
        args.cancel = true;
      }
    } else {
      //When click to cell "else" active.
      if (args.data.StartTime < new Date(Date.now())) {
        // args.element.style.backgroundColor = "red";
        args.cancel = true;
      }
    }
  }

  render() {
    return (
      <div className="container">
        <ScheduleComponent
          ref={t => (this.scheduleObj = t)}
          timezone="Europe/Istanbul"
          width="100%"
          height="100%"
          dateFormat="dd.MM.yyyy"
          currentView="Month"
          selectedDate={new Date(Date.now())}
          eventSettings={{ dataSource: this.data }}
          firstDayOfWeek={1}
          popupOpen={this.onPopupOpen.bind(this)}
          dataBound={this.onDataBound.bind(this)}
          eventClick={this.onEventClick.bind(this)}
          renderCell={this.onRenderCell.bind(this)}
          actionComplete={this.onActionComplete.bind(this)}
        >
          <Inject services={[Day, Week, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;
