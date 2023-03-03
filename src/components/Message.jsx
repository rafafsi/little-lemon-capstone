import { useEffect, useState } from "react";
import styled from "styled-components";

const Message = ({ msg, status }) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && <MessageSty className={status}>{msg}</MessageSty>}
        </>
    )
}
const MessageSty = styled.div`
    width: 100%;
    padding: 0.4em;
    border: 1px solid #495e57;
    margin: 5px auto;
    text-align: center;
    border-radius: 8px;

    &.success {
        color: #155724;
        background-color: #d4edda;
        border-color:  #c3e6cb;

    }

    &.error {
        color: #721c24;
        background-color: #f8d7da;
        border-color:  #f5c6cb;
    }
`

export default Message;