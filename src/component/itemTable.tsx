import { Table, Tag, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import { IItem } from '../model/item';
import { useItemContext } from '../state/item/context';
import useQueryPagingStatus, { PageParam } from '../state/pagequery/page';
import ItemService from '../api/item-service';
import ItemImgSrc from './itemImgSrc';
import ItemModal from './itemModal';



interface ItemTableProps {
  itemList: IItem[];
  isEditable?: boolean;
}

const initialPageParam = {
  index: 0,
  size: 100,
  count: 0,
}


export const ItemTable: React.FC<ItemTableProps> = ({ itemList }) => {
  const itemContext = useItemContext();
  const { pageIndex, pageSize, pageCount, setPageIndex, setPageSize, setPageCount } = useQueryPagingStatus(initialPageParam);
  const [firstLoad, setFirstLoad] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const allItems: IItem[] = itemList;
  const [items, setItems] = useState(allItems);
  const [selectedItem, setSelectedItem] = useState<IItem | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);


  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'imageSrc',
      key: 'imageSrc',
      render: (imageSrc: string) => (
        <ItemImgSrc itemImageSrc={imageSrc}></ItemImgSrc>
      )
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
      sorter: (a: IItem, b: IItem) => a.quantity - b.quantity,
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: IItem) => (
        <Space size="middle">
          <a onClick={() => showModal(item)}>Edit</a>
          <a onClick={() => deleteItem(item)}>Delete</a>
        </Space>
      ),
    },
  ];

  const deleteItem = async (item: IItem) => {
    await ItemService.deleteItem(item);
    setItems((await ItemService.getItems()));
  }

  const showCreateModal = () => {
    setIsAdd(true);
    setSelectedItem(undefined);
    setVisible(true);
  }
  
  const showModal = (item: IItem) => {
    setIsAdd(false);
    setSelectedItem(item);
    setVisible(true);
  };

  const handleOk = async (item: IItem) => {
    setConfirmLoading(true);

    try {      
      // isAdd ? call item service create vs edit
      if (isAdd)
        await ItemService.createItem(item);
      else 
        await ItemService.editItem(item);


      setItems((await ItemService.getItems()));
    } catch {
      // catch error show error notification
    }

    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };


  const onLoadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await ItemService.getItems()
      .then((itemRes) => {
        console.log(itemRes);
        if (itemRes) {
          setItems(itemRes);
          setIsLoading(false);
        }
      }
    );
  }
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

  useEffect(() => {
    // load item context
    if (isLoading || hasMore || !firstLoad) return;
    setFirstLoad(false);
    onLoadMore();
  }, []);

  useEffect(() => {
    if (itemContext.items && itemContext.items.length > 0) setHasMore(false);
    loadAllItems();
  }, [itemContext]);


  return (
    <div>
      <Button type="primary" onClick={showCreateModal}>
        Add
      </Button>
      <Table
        columns={columns}
        pagination={{ position: ['topLeft', 'bottomCenter'] }}
        dataSource={items}
      />
      <ItemModal
        item={selectedItem}
        visible={visible}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
        handleCancel={handleCancel}></ItemModal>
    </div>
  );
};

