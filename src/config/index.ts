import { get } from "lodash";

const api = "http://localhost:3001/api";

class Config {
    public get apiBaseUrl(): string {
        //return  process.env.API || api2 || get(window, "_env.API_BASE_URL", "");
        return api || get(window, "_env.API_BASE_URL", "");
    }
}

export default new Config();
