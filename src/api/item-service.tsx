import _ from "lodash";
import { APIEndPoints } from "../constant/api-path";
import { IItem } from "../model/item";
import { PageParam } from "../state/pagequery/page";
import { authorizedHttpClient } from "./api-client";

type GetItemsResponse = {
    rows: IItem[],
}
type GetItemResponse = {
    count: number,
    maxPages: number,
    rows: IItem[],
}
type CreateItemPayload = {
    item: Partial<IItem>
}
type CreateItemsPayload = {
    items: IItem[]
}

class ItemService {
    public async getItems(): Promise<any> {
        const response = await authorizedHttpClient.get<any>(
            APIEndPoints.items
        )
        if(response && response.data) {
            console.log(response.data);
            return response.data;
        }
        throw new Error("Get item service returns null.");
    }

    public async getItemPaged(page: PageParam): Promise<GetItemResponse> {
        const response = await authorizedHttpClient.get<GetItemResponse>(
            `${ APIEndPoints.item }?pageIndex=${page.index}&pageSize=${page.size}&pageCount=${page.count}`
        )
        if(response && response.data) {
            return response.data;
        }
        throw new Error("Get item service returns null.");
    }
    
    public async createItem(item: IItem): Promise<void> {
        const parseItem = _.pickBy(item, _.identity);
        const response = await authorizedHttpClient.post<void, CreateItemPayload>(
            APIEndPoints.item, { item: parseItem }
        )
        if(response) {
            return Promise.resolve();
        }
        throw new Error("Get item service returns null.");
    }
    
    public async editItem(item: IItem): Promise<void> {
        const response = await authorizedHttpClient.put(
            APIEndPoints.item, { item }
        )
        if(response) {
            return Promise.resolve();
        }
        throw new Error("Get item service returns null.");
    }
    
    public async deleteItem(item: IItem): Promise<void> {
        console.log(`${APIEndPoints.item}/${item.id}`);
        await authorizedHttpClient.delete(
            `${APIEndPoints.item}?id=${item.id}`
        )
        return Promise.resolve();
    }
    
    public async createItems(items: IItem[]): Promise<void> {
        const response = await authorizedHttpClient.post<void, CreateItemsPayload>(
            APIEndPoints.item, { items }, { timeout: 100000 }
        )
        if(response) {
            return Promise.resolve();
        }
        throw new Error("Get item service returns null.");
    }
}

export default new ItemService();
