import { get } from "lodash";

const api = "http://localhost:3001/api";
const featureToggle_OauthGoogle = true;

class Config {
    public get apiBaseUrl(): string {
        //return  process.env.API || api2 || get(window, "_env.API_BASE_URL", "");
        return get(window, "_env.API_BASE_URL", "") || api;
    }
    public get featureToggleOAUTHGoogle(): boolean {
        //return  process.env.API || api2 || get(window, "_env.API_BASE_URL", "");
        return get(window, "_env.FEATURE_TOGGLE_OAUTH_GOOGLE", "") || featureToggle_OauthGoogle;
    }
}

export default new Config();
