import httpCommon from "../../http-common";

class testService {
    testFunction() {
        return httpCommon.get(`/test`);
    }
}
export default new testService;