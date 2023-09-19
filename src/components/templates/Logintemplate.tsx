import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "components/ui";
import { PATH } from "constant";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema, LoginSchemaType } from "schema";
import { useAppDispatch } from "store";
import { loginThunk } from "store/quanLyNguoiDung/thunk";
import { toast } from "react-toastify";

export const Logintemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginSchemaType> = async (value) => {
    dispatch(loginThunk(value))
      .unwrap()
      .then(() => {
        toast.success("Đăng nhập thành công!");
      });
  };
  return (
    <form className="pt-[15px] pb-[15px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-40 text-white">Welcome to Airbnb</h2>
      <div className="mt-30">
        <Input
          label="Email"
          register={register}
          name="email"
          error={errors?.email?.message}
        />
      </div>
      <div className="mt-30">
        <Input
          label="Mật khẩu"
          register={register}
          name="password"
          error={errors?.password?.message}
        />
      </div>
      <div className="mt-40">
        <button className="text-white w-full bg-red-500 font-500 rounded-lg text-20 px-5 py-[16px]">
          Đăng Nhập
        </button>
      </div>
      <p className="mt-10 text-white">
        Bạn chưa có tài khoản?
        <span
          className="text-blue-500 cursor-pointer ml-3"
          onClick={() => {
            navigate(PATH.register);
          }}
        >
          Đăng kí
        </span>
      </p>
    </form>
  );
};

export default Logintemplate;
