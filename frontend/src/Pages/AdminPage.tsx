import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { myContext } from './Context';
import Axios, { AxiosResponse } from 'axios'
import { UserInterface } from '../Interfaces/UserInterface';

export default function AdminPage() {
    const ctx = useContext(myContext);
    console.log(ctx);

    const [data, setData] = useState<any>();
    const [SelectedUser, setSelectedUser] = useState<string>();
    useEffect(() => {
        Axios.get("http://localhost:4000/getalluser", {
            withCredentials: true 
        }).then((res: AxiosResponse) => {
            setData(res.data.filter((item : UserInterface) => {
                return item.username !== ctx.username

            }))
        })
    }, [ctx]);
    if (!data) {
        return null;
    }
    console.log(data);

    const deleteUser = () => {
        let userid : any;
        data.forEach((item : any) => {
            if (item.username === SelectedUser) {
                userid = item._id;
            }
        })

        Axios.post("http://localhost:4000/deleteuser", {
            id: userid
        }, {
            withCredentials: true
        });
    }
    return (
        <div>
            <h1>Only admin can see it</h1>
            <select>
                {
                    data.map((item: any) => {
                        return (
                            <option id={item.username}>{item.username}</option>
                        )
                    })
                }
            </select>
                <div className="admin">
                    Lieu 
                    P
                </div>
        </div>
    )
}
