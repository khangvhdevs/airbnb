import { Image } from 'components/ui';
import { useAppDispatch } from 'store';
import { RoomsByLocation } from 'types';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { getRoomsThunk } from 'store/quanLyPhong/thunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

export const DataTable = () => {
    const [data, setData] = useState<RoomsByLocation[]>();
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch()

    type DataIndex = keyof RoomsByLocation;

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RoomsByLocation> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                text
            ) : (
                text
            ),
    });

    const fetchData = () => {
        setLoading(true)
        dispatch(getRoomsThunk())
            .unwrap()
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);

    const columns: ColumnsType<RoomsByLocation> = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
        },
        {
            title: 'Mã Vị Trí',
            dataIndex: 'maViTri',
            width: '7%',
        },
        {
            title: 'Tên phòng',
            dataIndex: 'tenPhong',
            width: '30%',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: hinhAnh => <Image
                src={hinhAnh}
                style={{
                    height: "40px",
                    width: "50px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}
            />
            ,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <div>
                <Button
                    type='primary'
                    title='sửa'
                    className='mr-1'
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    type='primary'
                    danger
                    title='xóa'
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>,
        },
    ];

    return (
        <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            loading={loading}
            scroll={{ y: 450 }}
            expandable={{
                expandedRowRender: (record) => <p style={{ margin: 0 }}>Mô tả: {record.moTa}</p>,
            }}
        />)
}

export default Table