import { APIEndPoints } from "../constant/api-path";
import { IBadge } from "../model/badge";
import { PageParam } from "../state/pagequery/page";
import { authorizedHttpClient } from "./api-client";

type GetBadgeResponse = IBadge[];
type CreateBadgeResponse = {
    badge: IBadge
}

class BadgeService {
    public async getBadge(): Promise<GetBadgeResponse> {
        const response = await authorizedHttpClient.get<GetBadgeResponse>(
            APIEndPoints.badge
        )
        console.log(response);
        if(response && response.data) {
            return response.data;
        }
        throw new Error("Get Badge service returns null.");
    }

    public async getBadgePaged(page: PageParam): Promise<GetBadgeResponse> {
        const response = await authorizedHttpClient.get<GetBadgeResponse>(
            `${ APIEndPoints.badge }?pageIndex=${page.index}&pageSize=${page.size}&pageCount=${page.count}`
        )
        console.log(response);
        if(response && response.data) {
            return response.data;
        }
        throw new Error("Get Badge service returns null.");
    }
    
    public async createBadge(badge: IBadge): Promise<void> {
        const response = await authorizedHttpClient.post<void, CreateBadgeResponse>(
            APIEndPoints.badge, { badge }
        )
        console.log(response);
        if(response) {
            return Promise.resolve();
        }
        throw new Error("Get Badge service returns null.");
    }
}

export default new BadgeService();
