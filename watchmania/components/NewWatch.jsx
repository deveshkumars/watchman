import React from 'react'
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';
import Badge from './Badge';
import Link from 'next/link';
import { Link2Icon } from '@radix-ui/react-icons';
import {useState} from "react"; 
import { Button } from './ui/button';

const NewWatch = ({project}) => {
  async function onSubmit(){
    const newWatchBody = {
        link,
        make,
        model,
        price,
        year
    }
    const res = await fetch ("http://localhost:8080/watches", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newWatchBody)
    })
    {/*
         CHALLENGE: Can you get the table to reload whenever you call onSubmit? 
         This may involve restructuring your project and using props!
    */}
}

  const [link, setLink] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")
  const [year, setYear] = useState("")

  return (
    <Card className='group overflow-hidden relative'>
        <CardHeader className='p-0'>
            <div className='relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40xl:bg-[100%] xl:bg-no-repeat overflow-hidden'>
                
            

            <h2>Add a new watch</h2>

            </div>
        </CardHeader>
            <div>
            <Button onClick={onSubmit} className="gap-x-2 bg-black">
                Submit
            </Button>
            <div>
                <div>
                    <label htmlFor="make">Brand: </label>
                    <input 
                    placeholder="Rolex"
                    name="make"
                    value={make}
                    onChange = {(event) => setMake(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="model">Model: </label>
                    <input 
                    placeholder="Daytona"
                    value={model}
                    onChange = {(event) => setModel(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price (in K): </label>
                    <input 
                    value={price}
                    placeholder="30"
                    onChange = {(event) => setPrice(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year: </label>
                    <input 
                    value={year}
                    placeholder= "1999"
                    onChange = {(event) => setYear(event.target.value)}
                    />
                </div>
            </div>
    
        </div>
    </Card>
  )
}

export default NewWatch