import Service from "./Service";
export default class MockService extends Service {
  constructor() {
    super();
  }
  getUserAll(page = 1) {
    // return this.callApiGet(`/users?page=${page}`);
    return this.callApiGet(`/educationCalendarApi.do`);
  }
}
