export default class EventList {
    constructor(EventService) {
        this.EventService = EventService;
        this.showEvents = false;
    }

    $onInit() {
        this.EventService.getEvents(this.company).then(result => {
            this.events = result.data._embedded.events;
        })
    }
}






