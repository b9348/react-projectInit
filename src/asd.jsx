import { Input, Button } from 'antd';
import React, { useEffect } from 'react';
import { postF } from './utils/api'
import './asd.less';

const Asd = () => {
    useEffect(() => {
        const query = async () => {
            const res = await postF()
            console.log(res);
        }
        query()
    }, [])
    return <div className="wrapper">
        <div className="log">
            <div className="title">glad to see u</div>
            <div className="desc">登录以继续</div>

            <div className="inputHead">
                <div className="head">Email</div>
                <Input />
            </div>
            <div className="inputHead">
                <div className="head">
                    <div className="pwd">Password</div>
                    <Button type="link">forget ur pwd?</Button>
                </div>
                <Input />
            </div>

            <Button type="primary" >Login</Button>
        </div>
    </div>
};
export default Asd;