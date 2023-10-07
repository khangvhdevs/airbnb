import { Button as ButtonX, ButtonProps as ButtonPropsX, ConfigProvider } from "antd";

type ButtonProps = ButtonPropsX & {
    colorBgContainer?: string
    colorBorder?: string
    colorPrimaryActive?: string
    colorPrimaryBorderHover?: string
    colorPrimaryHover?: string
    colorPrimaryBgHover?: string
    textHoverBg?: string
    primaryShadow?: string
    colorPrimary?: string
    primaryColor?: string
    colorLink?: string
}

export const Button = (props: ButtonProps) => {
    return <ConfigProvider
        theme={{
            components: {
                Button: {
                    textHoverBg: props.textHoverBg,
                    primaryShadow: props.primaryShadow,
                    primaryColor: props.primaryColor,
                }
            },
            token: {
                colorBgContainer: props.colorBgContainer,
                colorBorder: props.colorBorder,
                colorPrimaryActive: props.colorPrimaryActive,
                colorPrimaryBorderHover: props.colorPrimaryBorderHover,
                colorPrimaryHover: props.colorPrimaryHover,
                colorPrimaryBgHover: props.colorPrimaryBgHover,
                // colorPrimary: props.colorPrimary,
                colorLink: props.colorLink,
            }
        }}
    >
        <ButtonX {...props} />
    </ConfigProvider>
}
export default Button