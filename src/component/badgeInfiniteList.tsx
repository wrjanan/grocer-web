import React, { useEffect, useState } from 'react';
import { IBadge } from '../model/badge';
import { Button, Col, List, Row } from 'antd';
import { useBadgeContext } from '../state/badge/context';
import CSVLoader from './csvloader';
import BadgeImg from './badgeImg';
import BadgeCanvas from './badgeCanvas';
import InfiniteScroll from 'react-infinite-scroller';
import * as CSS from 'csstype';
import BadgeService from '../api/badge-service';
import useQueryPagingStatus, { PageParam } from '../state/pagequery/page';
import { BadgeActionTypes, simulateHttpRequest } from '../state/badge/action';


const badgeListStyle: CSS.Properties = {
    maxWidth: "60em",
    margin: "auto",
};

const BadgeInfiniteList: React.FC = () => {
    const badgeContext = useBadgeContext();
    const [isLoading, setIsLoading] = useState(false);
    const { pageIndex, pageSize, pageCount, setPageIndex, setPageSize, setPageCount } = useQueryPagingStatus();
    

    const allBadges: IBadge[] = [];
    const [hasMore, setHasMore] = useState(false);
    const [badges, setBadges] = useState(allBadges);

    const onLoadClick = () => {
        loadMoreBadges();
        console.log("state", badgeContext);
        console.log("badges", badges);
    }
    const [items, setItems] = useState<any[]>([]);
    
    useEffect(() => {
        // load badge context
        if(isLoading || hasMore || pageIndex > 0) return;
        onLoadMore(0);
    }, []);
    
    useEffect(() => {
        console.log("badgeContext changed: ", badgeContext);
        if (badgeContext.badges && badgeContext.badges.length > 0) setHasMore(false);
        loadAllBadges();
    }, [badgeContext]);

    useEffect(() => {
        console.log("badges changed: ", badges);
        badges.map((badge, i) => {
            //console.log("badge: ", badge);
            setItems([...items, <Col span={4.5}><BadgeImg badge={ badge }/></Col>]);
        })
    }, [badges]);


    const loadAllBadges = () => {
        const loadingBadges: IBadge[] = [];
        for (let i = 0; i < badgeContext.badges.length; i++) {
            const badge = badgeContext.badges.pop();
            if (!!badge) {
                loadingBadges.push(badge);
            }
        };        
        if (loadingBadges.length) setBadges([...badges, ...loadingBadges]);
        setPageCount(pageCount + 1);
    }

    const loadMoreBadges = (amount = 1000) => {
        const loadingBadges: IBadge[] = [];
        for (let i = 0; i < amount; i++) {
            const badge = badgeContext.badges.pop();
            if (badge) {
                loadingBadges.push(badge);
            }
        };
        if (loadingBadges.length) setBadges([...badges, ...loadingBadges]);
        //BadgeRepo.bulkCreateBadge(loadingBadges);
    }

    const loadBadge = async () => {
        const badge = await BadgeService.getBadge();
        console.log("janan", badge);
    } 

    const createBadge = async () => {
        const badge = await BadgeService.createBadge({ 
            webScraperOrder: "janan",
            gameId: "janan",
            step: "janan",
            gameHref: "janan",
            imageSrc: "janan",
            text: "janan" });
        console.log("janan", badge);
    }       

    const onLoadMoretest = (pageIndex: number) => {
        console.log("loading, isLoading", isLoading);
        console.log("loading, hasMore", hasMore);
        loadBadgesPagedDB(pageIndex);
        if(isLoading) {
            return;
        }
        if(!hasMore) {
            setIsLoading(false);
        }
    } 

    const onLoadMore = async (pageIndex: number) => {
        if(isLoading) return;
        setHasMore(false);
        const page: PageParam = {
            count: pageCount,
            index: pageIndex,
            size: pageSize
        }
        setIsLoading(true);
        await BadgeService.getBadgePaged(page)
            .then((badgeRes) => {
                if(badgeRes) {
                    if (badgeRes.length) setBadges([...badges, ...badgeRes]);

                }
                setIsLoading(false);
                setHasMore(true);
            });
    } 

    const startPull = async () => {
        await loadBadgesPagedDB();
    } 

    const loadBadgesPagedDB = async (pageI = 0) => {
        console.log("isLoading", isLoading);
        console.log("hasMore", hasMore);
        console.log("pageI", pageI);
        if (isLoading || hasMore) return;
        const page: PageParam = {
            count: pageCount,
            index: pageI,
            size: pageSize
        }
        const data = await BadgeService.getBadgePaged(page);
        if (data.length) setBadges([...badges, ...data]);
        badgeContext.badges.push(...data);
        // data.forEach((badge) => {        
        //     setHasMore(true);
        //     badgeContext.badges.push(badge);
        //     simulateHttpRequest( {
        //         type: BadgeActionTypes.ADD_BADGE,
        //         badge
        //       });
        // })
        console.log(data);
        setPageIndex(pageIndex + 1);
        setHasMore(true);
    }

    return (
        <Row align="bottom" justify="center">
            <Col>
                <Row>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={onLoadMore}
                        hasMore={hasMore}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <List
                            grid={{
                                gutter: 0,
                                xxl: 6,
                            }}
                            style={badgeListStyle}
                            bordered={true}
                            dataSource={badges}
                            renderItem={item => (
                            <List.Item key={item.webScraperOrder}>
                                <br />
                                <br />
                                <BadgeImg badge={item} />
                                <br />
                                <a href={item.gameHref} target="_blank">{item.text}</a>
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

export default BadgeInfiniteList;
