import { Modal, Form, Input, InputNumber, Button } from 'antd';
import { ModalProps, ModalFuncProps } from 'antd/lib/modal';
import { formatCountdown } from 'antd/lib/statistic/utils';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IItem } from '../model/item';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be greater than ${min}',
    },
};
/* eslint-enable no-template-curly-in-string */
interface ItemModalProps extends ModalProps {
    item: IItem | undefined;
    handleOk: (item: IItem) => void;
    handleCancel: () => void;
}

const ItemModal: React.FC<ItemModalProps> = (props) => {
    const [form] = Form.useForm();

    const { visible, handleOk, confirmLoading, handleCancel, item } = props;
    const [modalItem, setModalItem] = useState(item);



    useEffect(() => {
        console.log(item);
        form.setFields([
            { name: "id", value: item?.id },
            { name: "name", value: item?.name },
            { name: "description", value: item?.description },
            { name: "quantity", value: item?.quantity },
            { name: "imageSrc", value: item?.imageSrc },
        ])
        console.log(form.getFieldsValue());
    }, [item])
    
    const onFinish = (values: any) => {
        console.log(form.getFieldsValue());
        handleOk(form.getFieldsValue());
        console.log(values);
    };


    return (
        <>
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Modal
                    title={`Editing ${item?.name}`}
                    visible={visible}
                    onOk={onFinish}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <Form.Item name={['id']} hidden={true} label="id">
                        <Input value={item?.id} />
                    </Form.Item>
                    <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                        <Input value={item?.name} />
                    </Form.Item>
                    <Form.Item name={['quantity']} label="Quantity" rules={[{ type: 'number', min: 0 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['description']} label="Description">
                        <Input.TextArea size="large" />
                    </Form.Item>
                    <Form.Item name={['imageSrc']} label="Image URL">
                        <Input />
                    </Form.Item>
                </Modal>
            </Form>
        </>
    );
};

export default ItemModal;