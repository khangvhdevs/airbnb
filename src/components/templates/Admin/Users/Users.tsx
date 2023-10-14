import React, { Fragment, useEffect, useState } from "react";
import { DatePicker, DatePickerProps, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getUserThunk } from "store/quanLyNguoiDung/thunk";
import { Button, Modal } from "components/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminUserSchema, AdminUserSchemaType } from "schema";
import { showSuccess } from "../../../../main";
import { quanLyNguoiDungServices } from "services";
export const Users: React.FC = () => {
  const { getUser } = useSelector((state: RootState) => {
    return state.quanLyNguoiDung;
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  //Tắt mở modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Register cho tài khoản mới
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AdminUserSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AdminUserSchema),
  });

  //Dữ liệu của các cột table
  const data: any = getUser;
  const columns: ColumnsType<any> = [
    {
      title: "ID của người dùng",
      dataIndex: "id",
      sorter: (a, b) => {
        let idUserA = a.id;
        let idUserB = b.id;
        if (idUserA - idUserB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA - nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "",
      render: () => {
        return (
          <Fragment>
            <div className="flex gap-3">
              <Button
                className=" font-500 rounded-lg text-16 py-10 w-[100px] text-center hover:bg-red-600"
                colorText="#fff"
                colorBgContainer="#ff4d4f
                "
                onClick={() => {
                  deleteUser();
                }}
              >
                Xoá
              </Button>
              <Button
                className=" text-white font-500 rounded-lg text-16 w-[100px] py-10 text-center hover:bg-blue-700"
                colorBgContainer="#1677ff
               "
              >
                Cập nhật
              </Button>
            </div>
          </Fragment>
        );
      },
    },
  ];

  //Tìm kiếm người dùng
  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  //Handle riêng ô DatePicker
  const [error, setError] = useState<string>();
  const handleChange: DatePickerProps["onChange"] = (date, datestring) => {
    setValue("birthday", datestring);
    if (!date) {
      setError("Vui lòng nhập ngày sinh");
    } else {
      setError("");
    }
  };
  //Handle xoá người dùng
  const deleteUser = () => {};

  //Hàm xử lý các sự kiện khi submit
  const onSubmit: SubmitHandler<AdminUserSchemaType> = async (value) => {
    try {
      await quanLyNguoiDungServices.postUser(value);
      console.log("value", value);
      showSuccess("Đã thêm tài khoản mới!");
      dispatch(getUserThunk());
      setIsModalOpen(false);
    } catch (err) {
      console.log("err", err?.response?.data?.content);
    }
  };
  return (
    <div>
      <h3 className="text-3xl mb-3">Quản lý người dùng</h3>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-20 text-rose-500">Thêm tài khoản</h2>
          <div className="mt-20">
            <input
              type="text"
              placeholder="Họ và tên"
              className="outline-none block w-full p-8 text-black border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("name")}
            />
            <p className="text-red-500">{errors?.name?.message as string}</p>
          </div>
          <div className="mt-20">
            <input
              type="text"
              placeholder="Email"
              className="outline-none block w-full p-8 text-black border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("email")}
            />
            <p className="text-red-500">{errors?.email?.message as string}</p>
          </div>
          <div className="mt-20">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="outline-none block w-full p-8 text-black border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
            />
            <p className="text-red-500">
              {errors?.password?.message as string}
            </p>
          </div>
          <div className="mt-20">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="outline-none block w-full p-8 text-black border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("phone")}
            />
            <p className="text-red-500">{errors?.phone?.message as string}</p>
          </div>
          <div className="mt-20">
            <DatePicker
              id="datepicker"
              className="outline-none block w-full p-8 text-black border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Chọn ngày sinh"
              onChange={handleChange}
              // value={datePicker ? dayjs(datePicker, "DD/MM/YYYY") : null}
              format="DD/MM/YYYY"
            />
            <p className="text-red-500">{error}</p>
          </div>
          <div className="mt-20">
            <select
              className="outline-none block w-full p-8 border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("gender")}
            >
              <option value="">Chọn giới tính</option>
              <option value="true" id="gender1">
                Nam
              </option>
              <option value="false" id="gender2">
                Nữ
              </option>
            </select>
            {errors.gender && (
              <p className="text-red-500">{errors?.gender?.message}</p>
            )}
          </div>
          <div className="mt-20">
            <select
              className="outline-none block w-full p-8 border border-grey rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
              {...register("role")}
            >
              <option value="">Loại tài khoản</option>
              <option value="Admin" id="gender1">
                Admin
              </option>
              <option value="User" id="gender2">
                User
              </option>
            </select>
            {errors.role && (
              <p className="text-red-500">{errors?.role?.message}</p>
            )}
          </div>
          <div className="mt-20">
            <button
              className="text-white w-full bg-red-500 font-500 rounded-lg text-16"
              onClick={() => {
                const DatePicker = document.getElementById(
                  "datepicker"
                ) as HTMLInputElement;
                if (!DatePicker.value) {
                  setError("Vui lòng nhập ngày sinh");
                }
              }}
            >
              Tạo tài khoản
            </button>
          </div>
        </form>
      </Modal>
      <Button
        className="mb-3"
        onClick={() => {
          setIsModalOpen(true);
        }}
        // colorBorder="#d9363e"
        // colorBgContainer="#ec6d74"
        type="primary"
        colorPrimaryHover="#ec6d74"
        colorText="#fff"
      >
        Thêm người dùng
      </Button>
      <Search
        placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
        enterButton="Tìm kiếm"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  );
};

export default Users;
