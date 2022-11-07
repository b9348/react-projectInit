import { Input, Button } from 'antd';
import React, { useEffect } from 'react';
import axios from 'axios';
import './asd.less';

const Asd = () => {
    useEffect(() => {
        (async function f() {
            // 开启loading特效
            const instance = axios.create({
                baseURL: '/api/rand.qinghua',
                timeout: 3000,
                headers: { 'Content-Type': 'application/json' }
            });

            return new Promise((resolve, reject) => {
                // console.log('开始调用')
                instance.get('')
                    .then((response) => {
                        console.log(response)
                        resolve(response);

                    })
                    // .catch((e) => {
                    //     reject(e)
                    //     console.log(e)
                    // })
            })

        })()
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