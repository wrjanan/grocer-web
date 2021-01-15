import React, { useEffect, useState } from 'react';
import { IBadge } from '../model/badge';
import { Button, Col, Image, Row } from 'antd';
import { useBadgeContext } from '../state/badge/context';
import CSVLoader from './csvloader';
import BadgeImg from './badgeImg';
import BadgeCanvas from './badgeCanvas';
import badgeService from '../api/badge-service';
import { PageParam } from '../state/pagequery/page';


const BadgeList: React.FC = () => {
    const badgeContext = useBadgeContext();
    const onClick = () => {

        console.log("state", badgeContext);
    }
    useEffect(() => {
        console.log("badgeContext changed: ", badgeContext);
    }, [badgeContext]);

    const badgeClick = (e: any) => {
        console.log(e);
    }

    const allBadges: IBadge[] = [];
    const [badges, setBadges] = useState(allBadges);
    const onLoadClick = () => {
        loadMoreBadges();
        console.log("state", badgeContext);
        console.log("badges", badges);
    }

    const loadMoreBadges = (amount = 1000) => {
        console.log("amount", amount);
        const loadingBadges: IBadge[] = [];
        for (let i = 0; i < amount; i++) {
            console.log("element", i);
            const badge = badgeContext.badges.pop();
            if (!!badge) loadingBadges.push(badge);
        };
        setBadges([...badges, ...loadingBadges]);
    }

    const loadBadge = () => {
        const badge = badgeContext.badges.pop();
        if (!!badge) setBadges([...badges, badge])
    }

    return (
        <>
            <CSVLoader></CSVLoader>
            <Button onClick={onClick}>janan</Button>
            <Button onClick={onLoadClick}>load badges</Button>
            <Row gutter={[16, 16]}>
                {badges.map((badge: IBadge) =>
                    <Col span={4.5}>
                        {/**<BadgeCanvas badge={ badge }/>**/}
                        <BadgeImg badge={ badge }/>
                    </Col>
                )}
            </Row>
        </>
    );
}

export default BadgeList;
