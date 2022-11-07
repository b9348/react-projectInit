import { Input, Button } from 'antd';
import React, { useEffect } from 'react';
import axios from 'axios';
import './asd.less';

const Asd = () => {
    useEffect(() => {
        const getStudentData = () => {
            axios.post('/auth/login',{
                username:'demo',
                password:'demo001'
            }).then(res => {
                console.log('成功', res)
            }, err => {
                console.log('失败', err)
            })
        }
        getStudentData()
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