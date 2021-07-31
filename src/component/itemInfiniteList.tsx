import React, { useEffect, useState } from 'react';
import { IItem } from '../model/item';
import { Button, Col, List, Row } from 'antd';
import { useItemContext } from '../state/item/context';
import ItemImg from './itemImg';
import InfiniteScroll from 'react-infinite-scroller';
import * as CSS from 'csstype';
import ItemService from '../api/item-service';
import useQueryPagingStatus, { PageParam } from '../state/pagequery/page';

const itemListStyle: CSS.Properties = {
    margin: "auto",
    maxWidth: "800px"
};

const initialPageParam = {
    index: 0,
    size: 100,
    count: 0,
}
interface ItemListProps {
    itemList: IItem[];
    tagList: number[];
    isEditable?: boolean;
}

const ItemInfiniteList: React.FC<ItemListProps> = ({itemList, tagList, isEditable=false}) => {
    const itemContext = useItemContext();
    const [firstLoad, setFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { pageIndex, pageSize, pageCount, setPageIndex, setPageSize, setPageCount } = useQueryPagingStatus(initialPageParam);
    

    const allItems: IItem[] = itemList;
    const allSelectedItems: IItem[] = [];
    const [hasMore, setHasMore] = useState(false);
    const [items, setItems] = useState(allItems);
    const [tags, setTags] = useState(tagList);
    const [selected, setSelected] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState(allSelectedItems);


    
    useEffect(() => {
        // load item context
        if(isLoading || hasMore || !firstLoad) return;
        setFirstLoad(false);
        onLoadMore();
    }, []);
    
    useEffect(() => {
        if (itemContext.items && itemContext.items.length > 0) setHasMore(false);
        loadAllItems();
    }, [itemContext]);

    useEffect(() => {
        items.map((item, i) => {
            //console.log("item: ", item);
            setSelected([...selected, <Col span={4.5}><ItemImg item={ item } selectItemHandler={selectItemHandler} /></Col>]);
        })        
    }, [items]);


    const loadAllItems = () => {
        const loadingItems: IItem[] = [];
        for (let i = 0; i < itemContext.items.length; i++) {
            const item = itemContext.items.pop();
            if (!!item) {
                loadingItems.push(item);
            }
        };        
        if (loadingItems.length) setItems([...items, ...loadingItems]);
        setPageCount(pageCount + 1);
    }

    const onLoadMore = async () => {
        if(isLoading) return;
        setIsLoading(true);
        const page: PageParam = {
            count: pageCount,
            index: pageIndex,
            size: pageSize
        }
        await ItemService.getItemPaged(page)
            .then((itemRes) => {
                if(itemRes) {
                    const { maxPages, rows } = itemRes;
                    if (rows.length) {
                        setHasMore(true);
                        setItems([...items, ...rows]);
                        setPageIndex(pageIndex + 1);
                        setIsLoading(false);
                    }
                    if(maxPages <= pageIndex) {
                        setHasMore(false);
                    }
                }
            }
        );
    }

    const selectItemHandler = async (selectedItem: IItem, remove = false) => {
        if(remove) {
            await setSelectedItems([ ...selectedItems.filter(item => item.id !== selectedItem.id) ]);
        } else {
            await setSelectedItems([ ...selectedItems, selectedItem ]);
        }
    }

    const onClickHandler = () => {
        console.log("selectItemHandler", selectedItems);
    }
    const createItem = async (item: IItem) => {
        await ItemService.createItem(item);
    }       

    const createItems = async (items: IItem[]) => {
        await ItemService.createItems(items);
    }       

    //<CSVLoader createItems={createItems}/> 
    return (
        <Row align="bottom" justify="center">
            <Col>
                <Row justify="center">
                    <Button hidden={!isEditable} onClick={onClickHandler}>hello</Button>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={onLoadMore}
                        hasMore={hasMore}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <List
                            grid={{
                                column: 6,
                                gutter: 0,
                                xs: 2,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 6,
                            }}
                            style={itemListStyle}
                            bordered={true}
                            dataSource={items}
                            renderItem={item => (
                            <List.Item key={item.id}>
                                <br />
                                <br />
                                <ItemImg item={item} selectItemHandler={selectItemHandler} />
                                <br />
                            </List.Item>
                        )}
                        >
                        </List>
                    </InfiniteScroll>
                </Row>
            </Col>
        </Row>
    );
}

export default ItemInfiniteList;
