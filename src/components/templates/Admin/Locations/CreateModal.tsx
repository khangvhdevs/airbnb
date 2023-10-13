import { zodResolver } from "@hookform/resolvers/zod"
import { Button, InputX, Modal } from "components/ui"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { LocationSchema, LocationSchemaType } from "schema/LocationSchema"
import { quanLyViTriServices } from "services"
import styled from "styled-components"

export const CreateModal = () => {
    const [modal, setModal] = useState<boolean>(false)

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LocationSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LocationSchema),
    })

    const onSubmit: SubmitHandler<LocationSchemaType> = async (value) => {
        try {
            await quanLyViTriServices.postLocation(value)
            toast.success("Thêm thành công")
        } catch (error) {

        }
    }
    return (
        <>
            <Button
                type="primary"
                danger
                onClick={() => {
                    setModal(true)
                }}
            >
                Thêm vị trí
            </Button>
            <Modal
                open={modal}
                onCancel={() => setModal(false)}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
                width={1000}
                paddingContentHorizontal={0}
            >
                <div className="pt-[2rem]">
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <InputX
                            register={register}
                            name="tenViTri"
                            error={errors?.tenViTri?.message}
                            placeholder='Tên vị trí'
                            type='text'
                            className="input_container"
                            labelClassname="input_label"
                            inputClassname="input_box"
                            errorClassname="input_error"
                        />
                        <InputX
                            register={register}
                            name="tinhThanh"
                            error={errors?.tinhThanh?.message}
                            placeholder='Tỉnh thành'
                            type='text'
                            className="input_container"
                            labelClassname="input_label"
                            inputClassname="input_box"
                            errorClassname="input_error"
                        />
                        <InputX
                            register={register}
                            name="quocGia"
                            error={errors?.tinhThanh?.message}
                            placeholder='Quốc gia'
                            type='text'
                            className="input_container"
                            labelClassname="input_label"
                            inputClassname="input_box"
                            errorClassname="input_error"
                        />
                        <div
                            className="mt-10 flex justify-end"
                        >
                            <Button
                                type="primary"
                                size="middle"
                                danger
                                htmlType="submit"
                                style={{
                                    padding: "0 20px",
                                }}
                            >
                                Lưu
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default CreateModal

const Form = styled.form`
    .input_container {
        margin-top: 10px;
    }
    .input_label {

    }
    .input_box {
        width: 100%;
        outline: none;
        padding: 10px;
        display: block;
        border: 1px solid gray;
        border-radius: 10px;
        &:focus {
            border: 1px solid blue;
        }
    }
`