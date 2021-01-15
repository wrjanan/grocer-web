import { get } from "lodash";

const api = "http://localhost:3001/api/v1";

class Config {
    public get apiBaseUrl(): string {
        return  api || get(window, "_env.API_BASE_URL", "");
    }
}

export default new Config();
